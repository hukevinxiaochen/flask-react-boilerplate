import React from 'react';

// TODO: Style it up!

var Updates = React.createClass({
    render: function () {
	    return (
		    <div className="content">
			    <div id="mc_embed_signup">
				    <form action="//ericakevin.us13.list-manage.com/subscribe/post?u=5557db02a80ebaa4bdb958f2f&amp;id=54edacb37c" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" novalidate>
					    <div id="mc_embed_signup_scroll">
						    <p>Share your email with us if you would like to receive notice of updates.</p>
						    <div className="indicates-required"><span className="asterisk">*</span> indicates required</div>
						    <div className="mc-field-group">
							    <label for="mce-EMAIL">Email Address  <span className="asterisk">*</span></label>
							    <input type="email" name="EMAIL" className="required email" id="mce-EMAIL" />
						    </div>
						    <div className="mc-field-group">
							    <label for="mce-FNAME">Given Name </label>
							    <input type="text" name="FNAME" className="" id="mce-FNAME" />
						    </div>
						    <div className="mc-field-group">
							    <label for="mce-LNAME">Family Name </label>
							    <input type="text" name="LNAME" className="" id="mce-LNAME" />
						    </div>
						    <div id="mce-responses" className="clear">
							    <div className="response" id="mce-error-response" style={{display: "none"}}></div>
							    <div className="response" id="mce-success-response" style={{display: "none"}}></div>
						    </div>
						    <div style={{position: "absolute", left: -5000}} aria-hidden="true">
							    <input type="text" name="b_5557db02a80ebaa4bdb958f2f_54edacb37c" tabindex="-1" value="" />
						    </div>
						    <div className="clear">
							    <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button" />
						    </div>
					    </div>
				    </form>
			    </div>
		    </div>
	    );
    }
});

export default Updates;

