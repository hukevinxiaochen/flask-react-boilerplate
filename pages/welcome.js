import React from 'react';

var Welcome = React.createClass({
    render: function () {
        return(
            <div className="content"> 
                <h1>Erica &amp; Kevin</h1>
                <img src="../static/couple.jpg" className="feature" />
                <h2>April 29, 2017</h2>
                <h2>Lancaster, Pennsylvania</h2>
            </div>
        );
    }
});

export default Welcome;