import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as SettingsActions from '../../actions/SettingsActions'

import { Dialog, Tabs, Tab, TextField, FlatButton } from 'material-ui'
import CircularProgress from 'material-ui/lib/circular-progress'

import ShowIf from '../ShowIf'

class ProviderAddModal extends Component {

  render() {
    const { dispatch } = this.props
    const actions = bindActionCreators(SettingsActions, dispatch)

    const dialogActions = [
      <FlatButton label="Test" secondary={true} onTouchTap={()=> actions.testProvider(this.props.selectedProvider, this.props.apiKey)}/>,
      <FlatButton label="Cancel" secondary={true} onTouchTap={()=> actions.cancelAddProvider()}/>,
      <FlatButton label="Add" secondary={true} onTouchTap={()=> actions.addProvider(this.props.selectedProvider, this.props.apiKey)}/>
    ]

    const handleApiKey = (event)=>{actions.changeApiKey(event.target.value)}

    var error

    if(!this.props.testPassed) {
      error = 'Api key wrong'
    }

    return (
      <ShowIf value={this.props.show}>
      <Dialog title="Select provider" actions={dialogActions} modal={false} open={this.props.show} >
        <Tabs value={this.props.selectedProvider} >
          <Tab label="Semaphore" value="SEMAPHORE" onActive={()=>actions.selectProvider('SEMAPHORE')}>
            <ShowIf value={this.props.isTesting}>
              <CircularProgress mode="indeterminate" size={1}/>
            </ShowIf>
            <TextField hintText="Api Key" value={this.props.apiKey} onChange={handleApiKey} errorText={error}/>
          </Tab >
          <Tab label="Circle CI" value="CIRCLE_CI" onChange={()=> actions.selectProvider('CIRCLE_CI')}>
            <TextField hintText="Api Key" value={this.props.apiKey} onChange={handleApiKey} errorText={error}/>
          </Tab>
        </Tabs>
    </Dialog>
    </ShowIf>)
  }
}

export default connect(state => state.ProviderAddModal)(ProviderAddModal)
