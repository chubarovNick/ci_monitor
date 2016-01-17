import React, { Component } from 'react'
import { connect } from 'react-redux'
import { List } from 'material-ui'

class Project extends Component {

  render() {
    const project = this.props.project
    return (
      <div>
        <List subheader={project.title}>

        </List>
      </div>
    )
  }

}

function mapStateToProps(state) {
  const { projects, favoriteProjects } = state.Projects
  return { projects, favoriteProjects }
}

export default connect(mapStateToProps)(Project)
