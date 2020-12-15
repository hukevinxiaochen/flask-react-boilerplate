import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import { MenuItem } from '@material-ui/core';
import Link from 'react-router/lib/Link';
import IndexLink from 'react-router/lib/IndexLink'

var SideBar = React.createClass({
    getInitialState: function () { 
        return {
            // Open when window is wide enough.
            open: !window.matchMedia('(max-width: 840px)').matches,
            docked: !window.matchMedia('(max-width: 840px)').matches,
            mql: window.matchMedia('(max-width: 840px)')
        }
    },
    handleToggle: function () {
        this.setState({ open: !this.state.open }); 
    },
    handleClose: function () {
	this.setState({ open: !this.state.mql.matches });
	// console.log("I was clicked!");
    },
    dockedToggle: function (mql) {
        this.setState({
            docked: !mql.matches,
            open: !mql.matches});
    },
    componentDidMount: function () {
        this.state.mql.addListener(this.dockedToggle);
    },
    componentWillUnmount: function () {
        this.state.mql.removeListener(this.dockedToggle);
    },    
    render: function () {
        var menuItems = this.props.pages.map(
            (page) => {
                return <Link key={page.path} to={page.path}>
                    <MenuItem onClick={this.handleClose}>{page.name}</MenuItem>
                    </Link>
            }
        ); 

        return (
            <Drawer width={200} 
                open={this.state.open}
                docked={this.state.docked}
                onRequestChange={(open) => this.setState({open})}>
                <IndexLink to="/">
                    <MenuItem onClick={this.handleClose}>Welcome</MenuItem>
                </IndexLink>
                {menuItems}
            </Drawer>
        );
    }
});

export default SideBar;

