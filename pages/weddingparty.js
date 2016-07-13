import React from 'react';

var WeddingParty = React.createClass({
    render: function () {
        return (
            <div className="content">
		    <h1>Wedding Party</h1>
		    <h2>Emma Bishop</h2>
		    <h3>Maid of Honor</h3>
		    <img src="../static/maidofhonor.png" className="feature" />
		    <p>Emma and Erica go way back to the late 1980s when Erica made her debut in the Bishop-Bashirian family.  Always looking up to her older sister, Erica followed Emma to Oberlin College, where Emma showed her the ropes during her first year (even though it was Erica's idea first).   These days Emma spends her time working as a software developer in Philadelphia, playing in the dirt, and reading books about dragons.
		    </p>
		    <h2>John Andreoni</h2>
		    <h3>Best Man</h3>
		    <img src="../static/bestman.jpg" className="feature" />
		    <p>John Andreoni became fast friends with Kevin and Erica as they tackled introductory chemistry together at Oberlin College. This initial shared passion for science led to further sharing of delicious food, music, and dance. Kevin has been one of John's closest friends since they met at Oberlin and continues to be part of how John survives graduate school and find happiness and wonder in the world.
		    </p>
	    </div>
        );
    }
});

export default WeddingParty;
