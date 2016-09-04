import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

var Updates = React.createClass({
    render: function () {
	    return (
		    <div className="content">
			    <div id="mc_embed_signup">
				    <form action="//ericakevin.us13.list-manage.com/subscribe/post?u=5557db02a80ebaa4bdb958f2f&amp;id=54edacb37c" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
					    <div id="mc_embed_signup_scroll">
						    <p>Share your email with us if you would like to receive notice of major updates!</p>
						    {/*<div className="indicates-required"><span className="asterisk">*</span> indicates required</div>*/}
						    {/*<div className="mc-field-group">
							    <label htmlFor="mce-EMAIL">Email Address  <span className="asterisk">*</span></label>
							    <input type="email" name="EMAIL" className="required email" id="mce-EMAIL" />
							    </div>*/}
							    <TextField hintText="Email" type="email" name="EMAIL" id="mce-EMAIL" />
							    <br />
						    {/*<div className="mc-field-group">
							    <label htmlFor="mce-FNAME">Given Name </label>
							    <input type="text" name="FNAME" className="" id="mce-FNAME" />
							    </div>*/}
							    <TextField hintText="Given Name" type="text" name="FNAME" id="mce-FNAME" />
							    <br />
						    {/*<div className="mc-field-group">
							    <label htmlFor="mce-LNAME">Family Name </label>
							    <input type="text" name="LNAME" className="" id="mce-LNAME" />
							    </div>*/}
						    <TextField hintText="Last Name" type="text" name="LNAME" id="mce-LNAME" />
						    <div id="mce-responses" className="clear">
							    <div className="response" id="mce-error-response" style={{display: "none"}}></div>
							    <div className="response" id="mce-success-response" style={{display: "none"}}></div>
						    </div>
						    <div style={{position: "absolute", left: -5000}} aria-hidden="true">
							    <input type="text" name="b_5557db02a80ebaa4bdb958f2f_54edacb37c" tabIndex="-1" value="" />
						    </div>
						    {/*<div className="clear">
							    <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button" />
							    </div>*/}
							    <RaisedButton label="Subscribe" primary={true} type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" />
					    </div>
				    </form>
			    </div>
		    </div>
	    );
    }
});

export default Updates;

