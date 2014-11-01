/** @jsx React.DOM */

var React = require("react");
var MainComponent = require("./MainComponent"); // Rename

window.addEventListener("load", function() {
    new FastClick(document.body);
}, false);

React.renderComponent(
    <MainComponent />,
    document.getElementById("main")
);
