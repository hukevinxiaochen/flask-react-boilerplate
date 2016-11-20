import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import ImageLens from 'material-ui/svg-icons/image/lens';
import {Tabs, Tab} from 'material-ui/Tabs';
import MediaQuery from 'react-responsive';

var ThingsToDo = React.createClass({
    render: function () {
        return (
            <div className="content">
		    <h1>Things To Do</h1>
		    {/*<h2>Coming Soon!</h2>*/}
		    <MediaQuery maxWidth={840}>
			    <h2>Attractions</h2>
				    <List>
			    <a href="http://www.centralmarketlancaster.com/" target="_blank">
				    <ListItem primaryText="Central Market" secondaryText="One of America’s oldest farmers’ markets" />
			    </a>
			    <a href="http://www.lancasterhistory.org/visit/wheatland" target="_blank">
				    <ListItem primaryText="Wheatland" secondaryText="President Buchanan’s mansion" />
			    </a>
			    <a href="http://www.nawcc.org/index.php/museum" target="_blank">
				    <ListItem primaryText="National Clock and Watch Museum" />
			    </a>
			    <a href="http://www.ephratacloister.org/index.htm" target="_blank">
				    <ListItem primaryText="Ephrata Cloister" />
			    </a>
			    <a href="http://demuth.org/" target="_blank">
				    <ListItem primaryText="DeMuth Museum" secondaryText="Small art museum" />
			    </a>
			    <a href="http://www.918club.org/" target="_blank">
				    <ListItem primaryText="Heritage Press Museum" secondaryText="Small printing workshop" />
			    </a>
		    </List>
	    	    <h2>Hiking</h2>
		    <List>
			    <a href="http://www.lancasterconservancy.org/preserve/turkey-hill-trail/" target="_blank">
				    <ListItem primaryText="Turkey Hill Trail" />
			    </a>
			    <a href="http://www.lancasterconservancy.org/preserve/tucquan-glen/" target="_blank">
				    <ListItem primaryText="Tucquan Glen" />
			    </a>
			    <a href="http://www.lancasterconservancy.org/preserve/kellys-run-pinnacle/" target="_blank">
				    <ListItem primaryText="Kelly’s Run" />
			    </a>
		    </List>
	    	    <h2>Kids</h2>
		    <List>
			    <a href="http://www.northmuseum.org/" target="_blank">
				    <ListItem primaryText="North Museum" />
			    </a>
			    <a href="http://www.lancastersciencefactory.org/" target="_blank">
				    <ListItem primaryText="Lancaster Science Factory" />
			    </a>
			    <a href="http://thepotteryworks.com/" target="_blank">
				    <ListItem primaryText="The Pottery Works" />
			    </a>
			    <a href="http://www.strasburgrailroad.com/" target="_blank">
				    <ListItem primaryText="Strasburg Railroad" />
			    </a>
		    </List>
	    	    <h2>Shopping</h2>
		    <List>
			    <a href="http://visithistoriclancaster.com/history_art/art_galleries" target="_blank">
				    <ListItem primaryText="Gallery Row" />
			    </a>
			    <a href="http://www.tenthousandvillages.com/ephrata/#fndtn-home" target="_blank">
				    <ListItem primaryText="Ten Thousand Villages" secondaryText="Flagship store" />
			    </a>
			    <Divider inset={true}/>
			    <Subheader inset={true}>Downtown Lancaster</Subheader>
			    <a href="http://visithistoriclancaster.com/things_to_do/shopping_vintage_antiques" target="_blank">
				    <ListItem primaryText="Antiques/Vintage" leftIcon={<ImageLens />} />
			    </a>
			    <a href="http://visithistoriclancaster.com/things_to_do/shopping_home" target="_blank">
				    <ListItem primaryText="Decor" leftIcon={<ImageLens />} />
			    </a>
			    <a href="http://visithistoriclancaster.com/things_to_do/shopping_fashion" target="_blank">
				    <ListItem primaryText="Fashion" leftIcon={<ImageLens />} />
			    </a>  
		    </List>
	    	    <h2>Food &amp; Drink</h2>
		    <List>
			    <a href="http://www.squareonecoffee.com/lancaster" target="_blank">
				    <ListItem primaryText="Square One Coffee" secondaryText="Coffee shop" />
			    </a>
			    <a href="http://www.chestnuthillcafe.com/" target="_blank">
				    <ListItem primaryText="Chestnut Hill Cafe" secondaryText="Cafe" />
			    </a>
			    <a href="http://www.princestreetcafe.com/" target="_blank">
				    <ListItem primaryText="Prince Street Cafe" secondaryText="Cafe" />
			    </a>
			    <a href="http://www.cocinamexicanalancaster.com/" target="_blank">
				    <ListItem primaryText="Cocina Mexicana" secondaryText="Mexican" />
			    </a>
			    <a href="http://www.yelp.com/biz/himalayan-curry-and-grill-lancaster-2" target="_blank">
				    <ListItem primaryText="Himalayan Curry &amp; Grill" secondaryText="Nepalese" />
			    </a>
			    <a href="http://www.tajlancaster.com/" target="_blank">
				    <ListItem primaryText="Taj Mahal" secondaryText="Indian" />
			    </a>
			    <a href="http://www.rachelscreperie.com/" target="_blank">
				    <ListItem primaryText="Rachel’s Creperie" secondaryText="Crepes" />
			    </a>
			    <a href="http://riceandnoodlesrestaurant.com/" target="_blank">
				    <ListItem primaryText="Rice and Noodles" secondaryText="Vietnamese" />
			    </a>
			    <a href="http://www.lancasterbrewing.com/" target="_blank">
				    <ListItem primaryText="Lancaster Brewing Company" secondaryText="Brewery/American" />
			    </a>
			    <a href="http://www.checkersbistro.com/restaurant.html" target="_blank">
				    <ListItem primaryText="Checker’s Bistro" secondaryText="American" />
			    </a>
			    <a href="http://carrsrestaurant.com/" target="_blank">
				    <ListItem primaryText="Carr’s Restaurant" secondaryText="American" />
			    </a>
		    </List> 
		    </MediaQuery>
		    <MediaQuery minWidth={841}>
			    {/* TODO: Make these Tabs scrollable */}
		    <Tabs>
			    <Tab label="Attractions">
				    <List>
			    <a href="http://www.centralmarketlancaster.com/" target="_blank">
				    <ListItem primaryText="Central Market" secondaryText="One of America’s oldest farmers’ markets" />
			    </a>
			    <a href="http://www.lancasterhistory.org/visit/wheatland" target="_blank">
				    <ListItem primaryText="Wheatland" secondaryText="President Buchanan’s mansion" />
			    </a>
			    <a href="http://www.nawcc.org/index.php/museum" target="_blank">
				    <ListItem primaryText="National Clock and Watch Museum" />
			    </a>
			    <a href="http://www.ephratacloister.org/index.htm" target="_blank">
				    <ListItem primaryText="Ephrata Cloister" />
			    </a>
			    <a href="http://demuth.org/" target="_blank">
				    <ListItem primaryText="DeMuth Museum" secondaryText="Small art museum" />
			    </a>
			    <a href="http://www.918club.org/" target="_blank">
				    <ListItem primaryText="Heritage Press Museum" secondaryText="Small printing workshop" />
			    </a>
		    </List>
	    </Tab>
	    <Tab label="Hiking">
		    <List>
			    <a href="http://www.lancasterconservancy.org/preserve/turkey-hill-trail/" target="_blank">
				    <ListItem primaryText="Turkey Hill Trail" />
			    </a>
			    <a href="http://www.lancasterconservancy.org/preserve/tucquan-glen/" target="_blank">
				    <ListItem primaryText="Tucquan Glen" />
			    </a>
			    <a href="http://www.lancasterconservancy.org/preserve/kellys-run-pinnacle/" target="_blank">
				    <ListItem primaryText="Kelly’s Run" />
			    </a>
		    </List>
	    </Tab>
		    <Tab label="Kids">
		    <List>
			    <a href="http://www.northmuseum.org/" target="_blank">
				    <ListItem primaryText="North Museum" />
			    </a>
			    <a href="http://www.lancastersciencefactory.org/" target="_blank">
				    <ListItem primaryText="Lancaster Science Factory" />
			    </a>
			    <a href="http://thepotteryworks.com/" target="_blank">
				    <ListItem primaryText="The Pottery Works" />
			    </a>
			    <a href="http://www.strasburgrailroad.com/" target="_blank">
				    <ListItem primaryText="Strasburg Railroad" />
			    </a>
		    </List>
	    </Tab>
		    <Tab label="Shopping">
		    <List>
			    <a href="http://visithistoriclancaster.com/history_art/art_galleries" target="_blank">
				    <ListItem primaryText="Gallery Row" />
			    </a>
			    <a href="http://www.tenthousandvillages.com/ephrata/#fndtn-home" target="_blank">
				    <ListItem primaryText="Ten Thousand Villages" secondaryText="Flagship store" />
			    </a>
			    <Divider inset={true}/>
			    <Subheader inset={true}>Downtown Lancaster</Subheader>
			    <a href="http://visithistoriclancaster.com/things_to_do/shopping_vintage_antiques" target="_blank">
				    <ListItem primaryText="Antiques/Vintage" leftIcon={<ImageLens />} />
			    </a>
			    <a href="http://visithistoriclancaster.com/things_to_do/shopping_home" target="_blank">
				    <ListItem primaryText="Decor" leftIcon={<ImageLens />} />
			    </a>
			    <a href="http://visithistoriclancaster.com/things_to_do/shopping_fashion" target="_blank">
				    <ListItem primaryText="Fashion" leftIcon={<ImageLens />} />
			    </a>
		    </List>
	    </Tab>
		    <Tab label="Food &amp; Drink">
		    <List>
			    <a href="http://www.squareonecoffee.com/lancaster" target="_blank">
				    <ListItem primaryText="Square One Coffee" secondaryText="Coffee shop" />
			    </a>
			    <a href="http://www.chestnuthillcafe.com/" target="_blank">
				    <ListItem primaryText="Chestnut Hill Cafe" secondaryText="Cafe" />
			    </a>
			    <a href="http://www.princestreetcafe.com/" target="_blank">
				    <ListItem primaryText="Prince Street Cafe" secondaryText="Cafe" />
			    </a>
			    <a href="http://www.cocinamexicanalancaster.com/" target="_blank">
				    <ListItem primaryText="Cocina Mexicana" secondaryText="Mexican" />
			    </a>
			    <a href="http://www.yelp.com/biz/himalayan-curry-and-grill-lancaster-2" target="_blank">
				    <ListItem primaryText="Himalayan Curry &amp; Grill" secondaryText="Nepalese" />
			    </a>
			    <a href="http://www.tajlancaster.com/" target="_blank">
				    <ListItem primaryText="Taj Mahal" secondaryText="Indian" />
			    </a>
			    <a href="http://www.rachelscreperie.com/" target="_blank">
				    <ListItem primaryText="Rachel’s Creperie" secondaryText="Crepes" />
			    </a>
			    <a href="http://riceandnoodlesrestaurant.com/" target="_blank">
				    <ListItem primaryText="Rice and Noodles" secondaryText="Vietnamese" />
			    </a>
			    <a href="http://www.lancasterbrewing.com/" target="_blank">
				    <ListItem primaryText="Lancaster Brewing Company" secondaryText="Brewery/American" />
			    </a>
			    <a href="http://www.checkersbistro.com/restaurant.html" target="_blank">
				    <ListItem primaryText="Checker’s Bistro" secondaryText="American" />
			    </a>
			    <a href="http://carrsrestaurant.com/" target="_blank">
				    <ListItem primaryText="Carr’s Restaurant" secondaryText="American" />
			    </a>
		    </List>
	    </Tab>
    </Tabs>
    </MediaQuery>
</div>
        );
    }
});

export default ThingsToDo;

