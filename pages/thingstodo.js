import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import {Tabs, Tab} from 'material-ui/Tabs';

var ThingsToDo = React.createClass({
    render: function () {
        return (
            <div className="content">
		    <h1>Things To Do</h1>
		    {/*<h2>Coming Soon!</h2>*/}
		    <Tabs>
			    <Tab label="Attractions">
				    <List>
			    <a href="http://www.centralmarketlancaster.com/">
				    <ListItem primaryText="Central Market" secondaryText="One of America’s oldest farmers’ markets" />
			    </a>
			    <a href="http://www.lancasterhistory.org/visit/wheatland">
				    <ListItem primaryText="Wheatland" secondaryText="President Buchanan’s mansion" />
			    </a>
			    <a href="http://www.nawcc.org/index.php/museum">
				    <ListItem primaryText="National Clock and Watch Museum" />
			    </a>
			    <a href="http://www.ephratacloister.org/index.htm">
				    <ListItem primaryText="Ephrata Cloister" />
			    </a>
			    <a href="http://demuth.org/">
				    <ListItem primaryText="DeMuth Museum" secondaryText="Small art museum" />
			    </a>
			    <a href="http://www.918club.org/">
				    <ListItem primaryText="Heritage Press Museum" secondaryText="Small printing workshop" />
			    </a>
		    </List>
	    </Tab>
	    <Tab label="Hiking">
		    <List>
			    <a href="http://www.lancasterconservancy.org/preserve/turkey-hill-trail/">
				    <ListItem primaryText="Turkey Hill Trail" />
			    </a>
			    <a href="http://www.lancasterconservancy.org/preserve/tucquan-glen/">
				    <ListItem primaryText="Tucquan Glen" />
			    </a>
			    <a href="http://www.lancasterconservancy.org/preserve/kellys-run-pinnacle/">
				    <ListItem primaryText="Kelly’s Run" />
			    </a>
		    </List>
	    </Tab>
		    <Tab label="Kids">
		    <List>
			    <a href="http://www.northmuseum.org/">
				    <ListItem primaryText="North Museum" />
			    </a>
			    <a href="http://www.lancastersciencefactory.org/">
				    <ListItem primaryText="Lancaster Science Factory" />
			    </a>
			    <a href="http://thepotteryworks.com/">
				    <ListItem primaryText="The Pottery Works" />
			    </a>
			    <a href="http://www.strasburgrailroad.com/">
				    <ListItem primaryText="Strasburg Railroad" />
			    </a>
		    </List>
	    </Tab>
		    <Tab label="Shopping">
		    <List>
			    <a href="http://visithistoriclancaster.com/history_art/art_galleries">
				    <ListItem primaryText="Gallery Row" />
			    </a>
			    <a href="http://www.tenthousandvillages.com/ephrata/#fndtn-home">
				    <ListItem primaryText="Ten Thousand Villages" secondaryText="flagship store" />
			    </a>
			    <ListItem primaryText="Downtown Lancaster" secondaryText="antiques/vintage, decor, fashion" nestedItems={[
				    <a href="http://visithistoriclancaster.com/things_to_do/shopping_vintage_antiques"><ListItem primaryText="Antiques/Vintage" /></a>,
				    <a href="http://visithistoriclancaster.com/things_to_do/shopping_home"><ListItem primaryText="Decor" /></a>,
				    <a href="http://visithistoriclancaster.com/things_to_do/shopping_fashion"><ListItem primaryText="Fashion" /></a>]} />
		    </List>
	    </Tab>
		    <Tab label="Food &amp; Drink">
		    <List>
			    <a href="http://www.squareonecoffee.com/lancaster">
				    <ListItem primaryText="Square One Coffee" secondaryText="Coffee shop" />
			    </a>
			    <a href="http://www.chestnuthillcafe.com/">
				    <ListItem primaryText="Chestnut Hill Cafe" secondaryText="Cafe" />
			    </a>
			    <a href="http://www.princestreetcafe.com/">
				    <ListItem primaryText="Prince Street Cafe" secondaryText="Cafe" />
			    </a>
			    <a href="http://www.cocinamexicanalancaster.com/">
				    <ListItem primaryText="Cocina Mexicana" secondaryText="Mexican" />
			    </a>
			    <a href="http://www.yelp.com/biz/himalayan-curry-and-grill-lancaster-2">
				    <ListItem primaryText="Himalayan Curry &amp; Grill" secondaryText="Nepalese" />
			    </a>
			    <a href="http://www.tajlancaster.com/">
				    <ListItem primaryText="Taj Mahal" secondaryText="Indian" />
			    </a>
			    <a href="http://www.rachelscreperie.com/">
				    <ListItem primaryText="Rachel’s Creperie" secondaryText="Crepes" />
			    </a>
			    <a href="http://riceandnoodlesrestaurant.com/">
				    <ListItem primaryText="Rice and Noodles" secondaryText="Vietnamese" />
			    </a>
			    <a href="http://www.lancasterbrewing.com/">
				    <ListItem primaryText="Lancaster Brewing Company" secondaryText="Brewery/American" />
			    </a>
			    <a href="http://pressroomrestaurant.com/">
				    <ListItem primaryText="The Pressroom" secondaryText="American" />
			    </a>
			    <a href="http://www.checkersbistro.com/restaurant.html">
				    <ListItem primaryText="Checker’s Bistro" secondaryText="American" />
			    </a>
			    <a href="http://carrsrestaurant.com/">
				    <ListItem primaryText="Carr’s Restaurant" secondaryText="American" />
			    </a>
		    </List>
	    </Tab>
    </Tabs>
</div>
        );
    }
});

export default ThingsToDo;

