// main.js

/*
 * Front-end libraries we rely on.
 * - React
 * - markdown-it
 *
* */

var React = require('react');
var ReactDOM = require('react-dom');
var md = require('markdown-it')();

// React Components
var editorStyle = {
    width: "100%"
};

var Editor = React.createClass({
    render: function () {
        return(
            <div className="one-half column">
            <form action="/login" method="POST">
            <textarea name="mdinputarea" onChange={this.props.chgHandler} style={editorStyle}></textarea>
            <input type="submit" value="Submit" />
            </form>
            </div>
        );
    }
});

var Preview = React.createClass({
    render: function () {
        return(
            <div className="one-half column">
            {this.props.data}
            </div>
        );
    }
});

var Interpreter = React.createClass({
    getInitialState: function () {
        return {data: []};
    },
    onEditorChg: function (event) {
        console.log(event.type);
        console.log(event.target.value);
        this.setState({data: [event.target.value]});
    },
    render: function () {
        return (
            <div>
            <Editor chgHandler={this.onEditorChg} />
            <Preview data={this.state.data} />
            </div>
        );
    }
});

ReactDOM.render(
    <Interpreter />,
    document.getElementById('interpreter')
);
