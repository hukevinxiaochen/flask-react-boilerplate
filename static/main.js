//main.js
// require('es6-promise').polyfill();
// require('isomorphic-fetch');

var React = require('react');
var ReactDOM = require('react-dom');

// Styles

var editorStyle = {
    width: "100%"
};

// Components
var Editor = React.createClass({
    onEditorChg: function (event) {
        console.log(event.type);
        console.log(event.target.value);
    },
    render: function () {
        return(
            <form action="/login" method="POST">
            <textarea name="mdinputarea" onChange={this.onEditorChg} style={editorStyle}></textarea>
            <input type="submit" value="Submit" />
            </form>
        );
    }
});

ReactDOM.render(
    <Editor />,
    document.getElementById('mdeditor')
);
