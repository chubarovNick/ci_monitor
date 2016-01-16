import React, {Component} from 'react';
import {connect} from 'react-redux';
import {List, ListItem} from 'material-ui';

class Project extends Component {

  render(){
    const project = this.props.project;
    return (
      <div>
        <List subheader={project.title}>

        </List>
      </div>
    )
  }

}

function mapStateToProps(state){
  const {projects, favoriteProjects} = state.Projects;
}

export default connect(mapStateToProps)(Project)
