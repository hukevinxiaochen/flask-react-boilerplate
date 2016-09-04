import React from 'react';
import { List, ListItem } from 'material-ui/List'; 
import { Link } from 'react-router';

var Transportation = React.createClass({
    render: function () {
        return (
            <div className="content">
		    <h1>Transportation</h1>
		    <h2>To and From Lancaster</h2>
		    <List style={{marginRight: "auto", marginLeft: "auto", maxWidth: 600}}>
			    <a href="https://www.amtrak.com/servlet/ContentServer?pagename=am/am2Station/Station_Page&code=LNC">
				    <ListItem primaryText="Lancaster Amtrak Station (LNC) (service to/from Philadelphia and New York City on the Keystone)" />
			    </a>
			    <a href="http://www.flyhia.com/">
				    <ListItem primaryText="Harrisburg International Airport (MDT) (½ hour drive)" />
			    </a>
			    <a href="http://www.bwiairport.com/en">
				    <ListItem primaryText="Baltimore Washington International Airport (BWI) (1 ½ hour drive)" />
			    </a>
			    <a href="http://www.phl.org/Pages/HomePage.aspx">
				    <ListItem primaryText="Philadelphia International Airport (PHL) (1 ½ hour drive)" />
			    </a>
		    </List>

		    <h2>Around Lancaster</h2>
		    <p>Check back for more details - coming soon! <Link to="/updates">Share</Link> your email if you would like to receive notice of updates.</p>
		{/*<h2>To and From Lancaster</h2>
		   <h3>Uber is in Lancaster</h3>
		*/}
		{/*<h2>To and From Ceremony</h2>*/}	
            </div>
        );
    }
});

export default Transportation;

