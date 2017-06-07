var React = require('react');
import FlatButton from 'material-ui/FlatButton';

var Accommodations = React.createClass({
    render: function () {
        return (
            <div className="content">
		    <h1>Accommodations</h1>
		    <p>On Saturday afternoon, a yellow school bus will provide complimentary shuttle service from the Hilton Garden Inn and the Fairfield Inn to Rock Ford Plantation.</p><br/>
		    <p>The bus will depart from the hotels at 4:30 pm.</p><br />
		    <p>The bus will make return trips to the hotels around 9:30 pm after the cake cutting and around 10:30 pm after the reception.
		    </p>
		    <h2>
			    <a href="http://lancaster.hgi.com" 
				    target="_blank">
				    Hilton Garden Inn</a>
		    </h2>
		    <img className="feature" src="../static/Hilton.jpg" /> 
		    <h4>101 Granite Run Drive<br />
			    Lancaster, PA 17601<br />
			    <a className="text-link" href="tel:717-560-0880">717-560-0880</a>
		    </h4>
		    <div className="centerify">
			    <p>
				    Reserve by March 31, 2017 for a rate of $142 per night.
			    </p>
			    <p>
				    <a className="text-link" href="http://hiltongardeninn.hilton.com/en/gi/groups/personalized/L/LNSLHGI-BHW-20170428/index.jhtml?WT.mc_id=POG" target="_blank">Book Online</a> using the code BHW or book over the phone mentioning the “Bishop-Hu Wedding.”
			    </p>
			    <p>Complimentary parking and wifi included.
			    </p>
		    </div>
		    <div className="spacer">
		    </div>
		    <h2>
			    <a href="http://marriot.com/LNSFI" 
				    target="_blank">
				    Fairfield Inn &amp; Suites</a>
		    </h2>
		    <img className="feature" src="../static/Fairfield.jpg" />
		    <h4>150 Granite Run Drive<br />
			    Lancaster, PA 17601<br />
			    <a className="text-link" href="tel:717-581-1800">717-581-1800</a>
		    </h4>
		    <div className="centerify">
			    <p>
				    Reserve by April 7, 2017 for a rate of $142 per night.
			    </p>
			    <p>
				    Book over the phone mentioning the “Bishop-Hu Wedding.”
			    </p>
			    <p>
				    Complimentary parking, wifi, and breakfast included.
			    </p>
		    </div>
	    </div>
        );
    }
});

export default Accommodations;
