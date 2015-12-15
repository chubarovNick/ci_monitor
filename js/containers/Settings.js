import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as SettingsActions from '../actions/SettingsActions';
import styles from '../../css/app.css';
import {Toggle, List, ListItem, ListDivider, FlatButton, Dialog} from 'material-ui';
import Icon from 'react-fa';

import ProviderAddModal from '../components/settings/ProviderAddModal';
import Provider from '../components/settings/Provider';

class Settings extends Component {

  render() {
    const {dispatch} = this.props;
    const actions = bindActionCreators(SettingsActions, dispatch);

    const providers = this.props.providers.map(function(p){
      return (<ListItem primaryText={ p.providerType } rightToggle={<Icon name="remove" onClick={()=>actions.removeProvider(p)}/>}></ListItem>)
    });

    return (
      <div className="settings">
        <ProviderAddModal/>
        <List subheader="Notification settings">
          <ListItem rightToggle={<Toggle/>} primaryText="Show build status notifications"/>
        </List>
        <ListDivider/>
        <List subheader="CI servers">
          {providers}
        </List>
        <FlatButton label="Add" onClick={()=> actions.showAddProviderModal()}>
        </FlatButton>
      </div>
    );
  }
}

function mapStateToProps(state){
  const {Settings} = state;
  const {providers} = Settings;
  return {
        providers
    }
}

export default connect(mapStateToProps)(Settings)
