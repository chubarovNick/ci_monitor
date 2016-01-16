import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as SettingsActions from '../../actions/SettingsActions';
import {Toggle, List, ListItem, Divider, FlatButton, Dialog} from 'material-ui';
import RemoveIcon from 'material-ui/lib/svg-icons/content/remove';

import ProviderAddModal from '../../components/settings/ProviderAddModal';

import ProvidersList from '../../components/settings/ProvidersList';

export class Settings extends Component {

  render() {
    const {dispatch} = this.props;
    const actions = bindActionCreators(SettingsActions, dispatch);

    return (
      <div className="settings">
        <ProviderAddModal/>
        <List subheader="Notification settings">
          <ListItem rightToggle={<Toggle toggled={this.props.notificationsEnabled} onToggle={(event,toggle)=>actions.toggleNotifcations(toggle)}/>}
                    primaryText="Show build status notifications"/>
        </List>
        <Divider/>
        <ProvidersList/>
        <FlatButton label="Add" onClick={()=> actions.showAddProviderModal()}>
        </FlatButton>
      </div>
    );
  }
}

function mapStateToProps(state){
  const {providers, notificationsEnabled} = state.Settings;
  return {providers, notificationsEnabled}
}

export default connect(mapStateToProps)(Settings)
