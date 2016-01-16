import React, {Component} from 'react';
import {AppBar, LeftNav, MenuItem} from 'material-ui';
import injectTapEventPlugin from "react-tap-event-plugin"
injectTapEventPlugin();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  render() {
    let history = this.props.history;

    let handleClick = (route)=>{
      this.setState({open: false});
      history.pushState(null, route)
    };

    return (
      <div>
        <AppBar  onLeftIconButtonTouchTap={()=>  this.setState({open: !this.state.open})}/>
        <LeftNav ref="nav" docked={false} open={this.state.open}>
          <MenuItem onTouchTap={()=>handleClick('/')}>Home</MenuItem>
          <MenuItem onTouchTap={()=>handleClick('/projects')}>Projects</MenuItem>
          <MenuItem onTouchTap={()=>handleClick('/settings')}>Settings</MenuItem>
        </LeftNav>
        {
          this.props.children
        }
      </div>
    );
  }
}

export default App;
