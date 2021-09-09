class Cart < ApplicationRecord
  has_many :line_items, dependent: :destroy

  def add_product(product)
    current_item = line_items.find_by(product_id: product.id)
    if current_item
      current_item.quantity += 1
    else 
      current_item = line_items.build(product_id: product.id)
    end
    current_item
  end

  def total_price
    line_items.to_a.sum { |item| item.total_price }
  end
  
end

# SO: On the code above (after 'else'), I was expecting:

# @line_item = @cart.line_items.build(product_id => params[:product_id])
# I don't understand why the author had to store the whole row of products( product = Product.find(params[:product_id])) instead of just getting the product_id...

# Is there more to it than what I can understand?

# You misunderstood build. It's just an alias of new, nothing special. https://github.com/rails/rails/blob/959fb8ea651fa6638aaa7caced20d921ca2ea5c1/activerecord/lib/active_record/relation.rb#L84

# build won't "create" a record in database, just create a new object in memory so that the view can take this object and display something, especially for a form.

# For your second question, yes, your way of composing by id will work as well. But a better approach is not to trust param. Instead, verify it by finding in db at first.