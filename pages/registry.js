var React = require('react');
import {List, ListItem} from 'material-ui/List';
import Card from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import ActionCardGiftcard from 'material-ui/svg-icons/action/card-giftcard';
import {red200, cyan500} from 'material-ui/styles/colors';

var Registry = React.createClass({
    render: function () {
        return (
		<div className="content">
			<h1>Registry</h1>
			<h2>Coming Soon!</h2>
			{/*<Card>
                    <List>
                        <a href="https://thankfulregistry.com/" target="_blank">
                            <ListItem primaryText="Thankful"
                                leftIcon={<ActionCardGiftcard
                                   color={red200} />} /></a>
                        <Divider />
                        <a href="http://www.simpleregistry.com/" target="_blank">
                            <ListItem primaryText="Simple"
                                leftIcon={<ActionCardGiftcard
                                    color={cyan500} />} /></a>
                    </List>
		    </Card>*/}
            </div>
        );
    }
});

export default Registry;
