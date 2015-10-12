import React, {Component} from 'react';
import {AppBar, FlatButton, LeftNav} from 'material-ui';
import {Link} from 'react-router';
import injectTapEventPlugin from "react-tap-event-plugin"
injectTapEventPlugin();

React.initializeTouchEvents(true);


class App extends Component {
  render() {
    return (
      <div>
        <AppBar  />
        {
          this.props.children
        }
      </div>
    );
  }
}

export default App;