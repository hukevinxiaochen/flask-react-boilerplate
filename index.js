// index.js

/*
 * Front-end libraries we rely on.
 * - React
 * - Material-UI
 * - react-router
 * - react-responsive
*/

// Hack required by Material-UI or something
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

// React
var React = require('react');
var ReactDOM = require('react-dom');

// App Components
import App from './components/app';

// Pages
import Welcome from './pages/welcome';
import AboutUs from './pages/aboutUs';
import WeddingParty from './pages/weddingparty';
import CeremonyAndReception from './pages/ceremonyreception';
import Accommodations from './pages/accommodations';
import Transportation from './pages/transportation';
import ThingsToDo from './pages/thingstodo';
import Registry from './pages/registry';
import RehearsalDinner from './pages/rehearsaldinner';
import Attire from './pages/attire';
import Brunch from './pages/brunch';
import Photos from './pages/photos'

// This component is not linked into the routing system
import Updates from './pages/updates';

// Routing
import Router from 'react-router/lib/Router';
import Route from 'react-router/lib/Route';
import browserHistory from 'react-router/lib/browserHistory';
import IndexRoute from 'react-router/lib/IndexRoute';

// Render
ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Welcome} />
	    <Route path="/about-us"  component={AboutUs} />
            <Route path="/wedding-party" component={WeddingParty} />
            <Route path="/ceremony-reception" component={CeremonyAndReception} />
	    <Route path="/rehearsal-dinner" component={RehearsalDinner} />
	    <Route path="/brunch" component={Brunch} />
	    <Route path="/attire" component={Attire} />
            <Route path="/accommodations" component={Accommodations} />
            <Route path="/transportation" component={Transportation} />
            <Route path="/things-to-do" component={ThingsToDo} /> 
	    <Route path="/registry" component={Registry} />
	    <Route path="/photos" component={Photos} />
        </Route>
    </Router>
), document.getElementById('app'));

