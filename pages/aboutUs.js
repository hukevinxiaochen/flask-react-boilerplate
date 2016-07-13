import React from 'react';

var AboutUs = React.createClass({
    render: function () {
        return(
            <div className="content">
		    <h1>About Us</h1>
		    <img className="feature" src="../static/dancing.jpg" />
		    <h2>How we met</h2>
		    <p>Kevin and Erica first met during orientation week at Oberlin College; however, the exact timing is controversial. Erica remembers Kevin asking her to dance at the orientation swing dance, but Kevin has no recollection of this. He remembers meeting Erica on a swimming trip at Chance Creek where he told her that she should not major in biology. Fortunately, Erica did not take his advice then, and never has since.
		    </p>
		    <h2>How we got engaged</h2>
		    <p>After lengthy discussions about their life philosophy, Kevin and Erica schemed to bring both of their families together for Thanksgiving dinner in Lancaster where they announced their engagement.
		    </p>
	    </div>
        );
    }
});

export default AboutUs;
