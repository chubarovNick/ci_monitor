import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as SettingsActions from '../../actions/SettingsActions';
import {Dialog, Tabs, Tab, TextField} from 'material-ui';
import Icon from 'react-fa';

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

      var progressIndicator;

      if(this.props.isTesting){
        progressIndicator = (<Icon name="spinner" spin/>)
      }

      let standardActions = [
        { text: 'Test', ref: 'test', onTouchTap: ()=> actions.testProvider(valueLink.value, this.props.apiKey) },
        { text: 'Cancel', onTouchTap: ()=> actions.cancelAddProvider() },
        { text: 'Add', disabled: true ,ref: 'submit', onTouchTap: ()=> actions.addProvider(valueLink.value, this.props.apiKey) }
      ];
      modalUi = (
        <Dialog title="Select provider" actions={standardActions} openImmediately={true} ref="dialog">
        <Tabs valueLink={valueLink}>
          <Tab label="Semaphore" value="SEMAPHORE">
            {progressIndicator}
            <TextField hintText="Api Key" value={this.props.apiKey} onChange={(e)=> actions.changeApiKey(e.target.value)}/>
          </Tab>
          <Tab label="Circle CI" value="CIRCLE_CI">
            <TextField hintText="Api Key" value={this.props.apiKey} onChange={(e)=> actions.changeApiKey(e.target.value)}/>
          </Tab>
        </Tabs>
      </Dialog>)
    }
    return (<div>{modalUi}</div>);
  }
}

export default connect(state => state.ProviderAddModal)(ProviderAddModal);
