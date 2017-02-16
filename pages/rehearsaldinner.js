import React from 'react';

var RehearsalDinner = React.createClass({
    render: function () {
        return(
		<div className="content">
			<h1>Rehearsal Dinner</h1>
		        <img src="../static/pressroom-image.jpg" className="feature" />
			<h4>A standing reception with drinks, hors d'oeuvres, and dinner at</h4>
			<div className="address">
				<h2>The Pressroom Restaurant</h2>
				<h3>26 W King Street<br />Lancaster, PA 17603</h3>
			</div>
			<h3>7:00 pm</h3>
			<h3>April 28, 2017</h3>
		</div>
	);
    }
});

export default RehearsalDinner;
