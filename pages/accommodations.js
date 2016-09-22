var React = require('react');

var Accommodations = React.createClass({
    render: function () {
        return (
            <div className="content">
		    <h1>Accommodations</h1>
		    <h2>Hilton Garden Inn</h2>
		    <img className="feature" src="../static/Hilton.jpg" />
		    <h3>$142/night (30 days in advance of 4/28)</h3>
		    <ul>
			    <li>Free Parking</li>
			    <li>Free Basic WiFi</li>
			    <li>Restaurant On-Site</li>
			    <li>Breakfast Not Included</li>
		    </ul>
		    <p><a href="http://hiltongardeninn.hilton.com/en/gi/groups/personalized/L/LNSLHGI-BHW-20170428/index.jhtml?WT.mc_id=POG">Book your stay here</a></p>
		    <h2>Fairfield Inn &amp; Suites</h2>
		    <img className="feature" src="../static/Fairfield.jpg" />
		    <h3>$142/night (21 days in advance of 4/28)</h3>
		    <ul>
			    <li>Free Breakfast</li>
			    <li>Free Parking</li>
			    <li>Free WiFi</li>
		    </ul>
            </div>
        );
    }
});

export default Accommodations;
