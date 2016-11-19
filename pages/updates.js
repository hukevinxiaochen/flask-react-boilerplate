import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

var Updates = React.createClass({
    render: function () {
	    return (
		    <div className="content">
			    <h1>Updates</h1>
			    <div id="mc_embed_signup">
				    <form action="//ericakevin.us13.list-manage.com/subscribe/post?u=5557db02a80ebaa4bdb958f2f&amp;id=54edacb37c" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
					    <div id="mc_embed_signup_scroll">
						    <p>Share your e-mail address if you would like to be notified when the website is updated with new information. Your e-mail address will be stored on a secure listserv and you will receive no more than a couple of e-mails.
						    </p>
						    <div className="pad-top">
						    <TextField hintText="Email" type="email" name="EMAIL" id="mce-EMAIL" />
						    <br />
						    <TextField hintText="Given Name" type="text" name="FNAME" id="mce-FNAME" />
						    <br />
						    <TextField hintText="Last Name" type="text" name="LNAME" id="mce-LNAME" />
						    <div id="mce-responses" className="clear">
							    <div className="response" id="mce-error-response" style={{display: "none"}}></div>
							    <div className="response" id="mce-success-response" style={{display: "none"}}></div>
						    </div>
						    <div style={{position: "absolute", left: -5000}} aria-hidden="true">
							    <input type="text" name="b_5557db02a80ebaa4bdb958f2f_54edacb37c" tabIndex="-1" value="" />
						    </div>
						    <div className="pad-top">
							    <RaisedButton label="Submit" primary={true} type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" />
						    </div>
						    </div>
					    </div>
				    </form>
			    </div>
		    </div>
	    );
    }
});

export default Updates;

