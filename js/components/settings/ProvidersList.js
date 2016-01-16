import React, {Component} from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {List, ListItem} from 'material-ui';
import RemoveIcon from 'material-ui/lib/svg-icons/content/remove';

import * as SettingsActions from '../../actions/SettingsActions';


export class ProvidersList extends Component {
  render(){
    const {dispatch} = this.props;
    const actions = bindActionCreators(SettingsActions, dispatch);

    return <List>
      {
        this.props.providers.map((provider)=><ListItem
          key={provider.apiKey}
          primaryText={ provider.providerType }
          rightToggle={<RemoveIcon onClick={()=>actions.removeProvider(provider)} />} />)
      }
    </List>
  }
}


function mapStateToProps(state){
  const {providers} = state.Settings;
  return {providers: providers}
}

export default connect(mapStateToProps)(ProvidersList);