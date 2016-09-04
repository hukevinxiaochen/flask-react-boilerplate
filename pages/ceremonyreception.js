import React from 'react';

var CeremonyAndReception = React.createClass({
    render: function () {
        return(
		<div className="content">
			<h1>Ceremony and Reception</h1>
			<img src="http://www.lancastercountymag.com/wp-content/uploads/2015/06/Backyard.jpg" className="feature" />
			<div className="address">
				<h2>Rock Ford Plantation</h2>
				<h3>881 Rockford Road<br />Lancaster, PA 17602</h3>
			</div>
			<h3>Late afternoon</h3>
			<h3>April 29, 2017</h3>
			{/*<h4>Come early for croquet before the ceremony!</h4>*/}
			<h4>Reception will follow the ceremony.</h4>
		</div>
	);
    }
});

export default CeremonyAndReception;
