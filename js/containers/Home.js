import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {FlatButton} from 'material-ui';
import Icon from 'react-fa';
import {Link} from 'react-router';


class Home extends Component {
  addProviderMessage(){
    if(this.props.providers.length === 0){
      return (
        <div>
          No providers added
          <Link to="/settings">Please add providers</Link>
        </div>
      )
    } else {
      return (<div></div>)
    }
  }
  render() {
    return (
      <main>
        {
          this.addProviderMessage()
        }
      </main>
    );
  }
}

function mapStateToProps(state){
  const {Settings} = state;
  const {Home} = state;
  const {providers} = Settings;


  return {
    providers
  }
}
export default connect(mapStateToProps)(Home)
