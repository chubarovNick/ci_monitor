import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {FlatButton} from 'material-ui';
import {Link} from 'react-router';

import ShowIf from '../components/ShowIf';

/*
  Home component shows list of projects with latest builds which are marked as favorite
*/
class Home extends Component {

  render() {
    return (
      <main>
        <ShowIf value={this.props.providers.length === 0}>
          <div>
            No providers added
            <Link to="/settings">Please add providers</Link>
          </div>
        </ShowIf>
        <ShowIf value={!(this.props.providers.length === 0)}>
          
        </ShowIf>
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
