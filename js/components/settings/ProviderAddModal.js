import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as SettingsActions from '../../actions/SettingsActions';
import {Dialog, Tabs, Tab, TextField} from 'material-ui';

class ProviderAddModal extends Component {
  render(){
    const {dispatch} = this.props;
    const actions = bindActionCreators(SettingsActions, dispatch);
    var modalUi;

    if(this.props.show){
      let valueLink= {
        value: this.props.selectedProvider,
        requestChange: (v)=> actions.selectProvider(v)
      };

      let standardActions = [
        { text: 'Cancel' },
        { text: 'Add', ref: 'submit', onTouchTap: ()=> actions.addProvider(valueLink.value, '') }
      ];
      modalUi = (
        <Dialog title="Select provider" actions={standardActions} openImmediately={true} ref="dialog">
        <Tabs valueLink={valueLink}>
          <Tab label="Semaphore" value="SEMAPHORE">
            <TextField hintText="Api Key"/>
          </Tab>
          <Tab label="Circle CI" value="CIRCLE_CI">
            Not implemented
          </Tab>
        </Tabs>
      </Dialog>)
    }
    return (<div>{modalUi}</div>);
  }
}

export default connect(state => state.ProviderAddModal)(ProviderAddModal);
