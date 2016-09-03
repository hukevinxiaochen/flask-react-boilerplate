import React from 'react';
import { List, ListItem } from 'material-ui/List'; 
import { Link } from 'react-router';
// TODO: Link it up!
var Transportation = React.createClass({
    render: function () {
        return (
            <div className="content">
		    <h1>Transportation</h1>
		    <h2>To and From Lancaster</h2>
		    <List style={{marginRight: "auto", marginLeft: "auto", maxWidth: 600}}>
			    <ListItem primaryText="Lancaster Amtrak Station (LNC) (service to/from Philadelphia and New York City on the Keystone)" />
			    <ListItem primaryText="Harrisburg International Airport (MDT) (½ hour drive)" />
			    <ListItem primaryText="Baltimore Washington International (BWI) (1 ½ hour drive)" />
			    <ListItem primaryText="Philadelphia International Airport (PHL) (1 ½ hour drive)" />
		    </List>

		    <h2>Around Lancaster</h2>
		    <p>Check back for more details - coming soon! <Link to="/updates">Share</Link> your email if you would like to receive notice of updates.</p>
		{/*<h2>To and From Lancaster</h2>
		   <h3>Uber is in Lancaster</h3>
		*/}
		{/*<h2>To and From Ceremony</h2>*/}
		{/* TODO: Link to sign up for updates */}
            </div>
        );
    }
});

export default Transportation;

