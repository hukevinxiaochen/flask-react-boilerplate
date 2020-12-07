import React from 'react';

var Photos = React.createClass({
    render: function () {
        return(
            <div className="content"> 
                <h1>Photos</h1>	
                <a href="http://www.melissaenglephotography.com/kevinericawedding" target="_blank">
		  <h2>Melissa Engle Photography</h2>
		</a>
		  <h4>Photos from our professional photographer.</h4>
		  <h4>When using photos in a public
			space, please attribute them,
			e.g. "Photo credit: Melissa Engle Photography".
		  </h4>
		<br />
		<a href="https://goo.gl/photos/ANkNTjxZJPPEQqGE6" target="_blank">
		  <h2>Google Album</h2>
		</a>
		  <h4>Show off your awesome photography skills!</h4>
		  <h4>Upload your photos and view others' photos here.
		  </h4>
		<br />
		<a href="https://mygallery.loveandthymephotography.com/guestlogin/ericakevin/?return=/ericakevin/" target="_blank">
		  <h2>Love + Thyme Photography</h2>
		</a>
		  <h4>Alex Turshen's album.</h4>
		  <h4>Please credit: @loveandthymephotography on Instagram and on FB www.facebook.com/LoveandThymePhotography.
		  </h4>

            </div>
        );
    }
});

export default Photos;
