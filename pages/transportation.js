import React from 'react';
import { List, ListItem } from 'material-ui/List'; 
import RaisedButton from 'material-ui/RaisedButton';
import Link from 'react-router';

var Transportation = React.createClass({
    render: function () {
        return (
            <div className="content">
		    <h1>Transportation</h1>
		    <h2>To and From Lancaster</h2>
		    <List style={{marginRight: "auto", marginLeft: "auto", maxWidth: 600}}>
			    <a href="https://www.amtrak.com/servlet/ContentServer?pagename=am/am2Station/Station_Page&code=LNC" target="_blank">
				    <ListItem primaryText="Lancaster Amtrak Station (LNC)" secondaryText="service to/from Philadelphia and New York City on the Keystone" />
			    </a>
			    <a href="http://www.flyhia.com/" target="_blank">
				    <ListItem primaryText="Harrisburg International Airport (MDT)" secondaryText="½ hour drive" />
			    </a>
			    <a href="http://www.bwiairport.com/en" target="_blank">
				    <ListItem primaryText="Baltimore Washington International Airport (BWI)" secondaryText="1 ½ hour drive" />
			    </a>
			    <a href="http://www.phl.org/Pages/HomePage.aspx" target="_blank">
				    <ListItem primaryText="Philadelphia International Airport (PHL)" secondaryText="1 ½ hour drive" />
			    </a>
		    </List>

		    <h2>Around Lancaster</h2>
		    <h3>COMING SOON!</h3>
		    {/*<div className="centerify">
			    <RaisedButton label="Sign Up for Email Updates" secondary={true} />
		    </div>*/}
		{/*<h2>To and From Lancaster</h2>
		   <h3>Uber is in Lancaster</h3>
		*/}
		{/*<h2>To and From Ceremony</h2>*/}	
            </div>
        );
    }
});

export default Transportation;

