/*
 * App.js exports App
 *
 * App invokes Material-UI's ThemeProvider which wraps around:
 *
 * - AppBar
 * - SideBar
 * - section
 *
 * These are the top-level layout components. Inside of them we have our 
 * content.
 *
 *
 * */

// app.js
var React = require('react');

// node_modules/react-responsive
import MediaQuery from 'react-responsive';

// node_modules/material-ui
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { MuiThemeProvider as V0MuiThemeProvider } from 'material-ui';
import AppBar from 'material-ui/AppBar';

// Custom Components
import SideBar from './sidebar';

// Theme Customization
import {yellow50, blue500, indigo500, yellow500} from 'material-ui/styles/colors';

var muiTheme = getMuiTheme({
	fontFamily: "'Lora', Georgia, Serif",
	palette: {
		primary1Color: "#336DC3",
	},
});

// Data Model
var pages = [{name: "About Us", path: "/about-us"},
            {name: "Wedding Party", path: "/wedding-party"},
            {name: "Ceremony & Reception", path: "/ceremony-reception"},
            {name: "Rehearsal Dinner", path: "/rehearsal-dinner"},
	    {name: "Brunch", path: "/brunch"},
	    {name: "Attire", path: "/attire"},
            {name: "Accommodations", path: "/accommodations"},
            {name: "Transportation", path: "/transportation"},
            {name: "Things To Do", path: "/things-to-do"},
            {name: "Registry", path: "/registry"},
	    {name: "Photos", path: "/photos"}];

// component
var App = React.createClass({
    toggleSideBar: function () { 
        this.drawer.handleToggle();
    },
    render: function () {
        return(
            <V0MuiThemeProvider muiTheme={muiTheme}>
                <div>
                    <MediaQuery maxWidth={840}>
                        <AppBar title="E &amp; K" 
                            onLeftIconButtonClick={this.toggleSideBar} />
                    </MediaQuery>
                    <SideBar pages={pages}
                        ref={(ref) => this.drawer = ref}
                        className="sidebar" />
                    <section>
                        {this.props.children}
                    </section>
                </div>
            </V0MuiThemeProvider>
        );
    }
});

export default App;
