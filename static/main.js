//main.js
// require('es6-promise').polyfill();
// require('isomorphic-fetch');

var React = require('react');
var ReactDOM = require('react-dom');

var Editor = React.createClass({
    onEditorChg: function (event) {
        console.log(event.type);
        console.log(event.target.value);
    },
    render: function () {
        return(
            <div>
            <form action="/login" method="POST">
              <input type="text" name="officecode" />
              <textarea name="mdinputarea" onChange={this.onEditorChg}></textarea>
              <input type="submit" value="Submit" />
            </form>
            </div>
        );
    }
});

ReactDOM.render(
    <Editor />,
    document.getElementById('mdeditor')
);
