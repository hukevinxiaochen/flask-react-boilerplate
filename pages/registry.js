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
			<a href="https://secure.williams-sonoma.com/registry/9bw2gqdjmv/registry-list.html" target="_blank">
			<h2>Williams Sonoma</h2>
			</a>
		<a href="https://www.bedbathandbeyond.com/store/giftregistry/view_registry_guest.jsp?registryId=544297931&eventType=Wedding&pwsurl=" target="_blank">
			<h2>Bed, Bath & Beyond</h2>
			</a>
<a href="https://www.amazon.com/wedding/kevin-hu-erica-bishop-lancaster-april-2017/registry/1ZBE71V4CIGLE" target="_blank">
			<h2>Amazon</h2>
			</a>

			{/*<Card>
                    <List>
                        <a href="https://thankfulregistry.com/" target="_blank" target="_blank">
                            <ListItem primaryText="Thankful"
                                leftIcon={<ActionCardGiftcard
                                   color={red200} />} /></a>
                        <Divider />
                        <a href="http://www.simpleregistry.com/" target="_blank" target="_blank">
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
