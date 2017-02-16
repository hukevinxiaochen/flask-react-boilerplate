import React from 'react';

var Brunch = React.createClass({
    render: function () {
        return(
		<div className="content">
			<h1>Brunch</h1>	
			<div className="address">
				<h2>The Bishop-Bashirian Home</h2>
				<h3>1519 Hillcrest Road<br />Lancaster, PA 17603</h3>
			</div>
			<h3>10:00 AM</h3>
			<h3>April 30, 2017</h3>	
			<h4>Please join us for a casual brunch on Sunday.</h4>
		</div>
	);
    }
});

export default Brunch;
