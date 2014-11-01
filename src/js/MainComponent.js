/** @jsx React.DOM */

var React = require("react");

module.exports = React.createClass({
    getInitialState: function () {
        return { message: "Hello world" };
    },

    render: function () {
        return (
            <div className="app">
                <h1>The message is:</h1>
                <p>{this.state.message}</p>
            </div>
        );
    }
});
