import React, { Component } from 'react'

import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
// import * as ProjectsActions from '../actions/ProjectsActions'

import { CircularProgress } from 'material-ui'

import ShowIf from '../components/ShowIf'

class Project extends Component {
  render() {
    // const { dispatch } = this.props
    // const actions = bindActionCreators(ProjectsActions, dispatch)

    return(
      <div className="project">
        <ShowIf value={this.props.loading}>
          <CircularProgress mode="indeterminate"/>
        </ShowIf>
        <ShowIf value={!this.props.loading}>

        </ShowIf>
      </div>
    )
  }

}

function mapStateToProps(state) {
  let { Project } = state
  return { ...Project }
}


export default connect(mapStateToProps)(Project)
