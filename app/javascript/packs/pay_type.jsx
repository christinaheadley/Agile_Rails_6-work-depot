import React from "react";
import ReactDOM from "react-dom";
import PayTypeSelector from "../app/javascript/packs/PayTypeSelector/index.jsx";

document.addEventListener("turbolinks:load", function () {
  var element = document.getElementById("pay-type-component");
  ReactDOM.render(<PayTypeSelector />, element);
});
// This code is not a React component, but just a few lines of code to bootstrap our React component and get it onto our page.

// 1. This is how we get access to the main React library. import is like require in Ruby: it allows us to access code located in other files. Although it’s formally part of the JavaScript standard, browsers don’t support it. Webpack provides an implementation for us when it compiles our code. When it processes this line, it’ll try to find a file named react.js in one of the paths it’s configured to search (we’ll learn more about this in a bit).
// ​ ② ​ This brings in the ReactDOM object, which has the render function we need to bootstrap our React component.
// ​ ③ ​ Here, we’re importing PayTypeSelector , which is the component we’ll make next. When we actually build this component, we’ll explain how Webpack knows where to find the code. The most important thing about this line for now is the name PayTypeSelector , which we’ll reference later in the file.
// ​ ④ ​ This uses the standard function addEventListener available on document to ensure that the code we’re about to execute only runs after the entire DOM has loaded. Note that we aren’t using the more standard DOMContentLoaded event.
// Due to how Turbolinks works, that event isn’t fired every time our page is reloaded. Turbolinks manages the page-loading events for us and instead fires the turbolinks:load event. If you were to use DOMContentLoaded , then navigate away from the page, and then use the back button, the page would not properly set up React and nothing would work. Using turbolinks:load ensures that React is set up every time the page is rendered.
// ​ ⑤ ​ This line is also vanilla JavaScript and is locating an element with the ID pay-type-component . We’ll create that element in our Rails view later.
// ​ ⑥ ​ This is the weirdest line in this file. It doesn’t even look like JavaScript! ReactDOM.render ’s job is to replace element with the React component PayTypeSelector . In a JSX file, the way to do that is via this odd HTML-like value <PayTypeSelector /> . We’ll see a more involved example of JSX when we build PayTypeSelector , but part of what happens when Webpack compiles a JSX file is to interpret this strange-looking syntax and produce JavaScript that works in our browser. It works because we used PayTypeSelector in the import line above.

// Sam Ruby, David Bryant Copeland, with Dave Thomas. Agile Web Development with Rails 6 (Kindle Locations 7384-7397).
