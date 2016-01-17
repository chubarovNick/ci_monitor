import React, { Component } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as ProjectsActions from '../../actions/ProjectsActions'

import Star from 'material-ui/lib/svg-icons/toggle/star'
import StarBorder from 'material-ui/lib/svg-icons/toggle/star-border'

class FavorProject extends Component {
  _isFavorite() {
    return this.props.favoriteProjects.indexOf(this.props.project.id) >= 0
  }
  _toggleProject() {
    const { dispatch } = this.props
    const actions = bindActionCreators(ProjectsActions, dispatch)
    const project = this.props.project
    if(this._isFavorite()) {
      actions.unfavorPorject(project)
    } else {
      actions.faviorProject(project)
    }

  }
  render() {
    const isFavorite = this._isFavorite()

    return (
      <div style={this.props.style} onClick={this._toggleProject.bind(this)}>
      {
        isFavorite ? <Star/> : <StarBorder/>
      }
    </div>)
  }
}

function mapStateToProps(state) {
  let { favoriteProjects } = state.Projects
  return { favoriteProjects }
}

export default connect(mapStateToProps)(FavorProject)
