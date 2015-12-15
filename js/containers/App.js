import React, {Component} from 'react';
import {AppBar, LeftNav, MenuItem} from 'material-ui';
import injectTapEventPlugin from "react-tap-event-plugin"
injectTapEventPlugin();

React.initializeTouchEvents(true);

class App extends Component {
  render() {
    let menuItems = [
      { route: '/home', text: 'Home' },
      { route: '/projects', text: 'Projects' },
      { route: '/settings', text: 'Settings' }
    ];
    return (
      <div>
        <AppBar  onLeftIconButtonTouchTap={()=> this.refs.leftNav.toggle()}/>
        <LeftNav
          ref="leftNav"
          docked={false}
          menuItems={menuItems}
          onChange={(e,key, payload)=> this.props.history.pushState(null, payload.route)}/>
        {
          this.props.children
        }
      </div>
    );
  }
}

export default App;
