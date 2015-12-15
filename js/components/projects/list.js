import React, {Component} from 'react';
import {connect} from 'react-redux';

import {List, ListItem, ListDivider} from 'material-ui';

class ProjectList extends Component {

  render(){
    let providers = this.props.providers;
    let projects = Object.keys(providers).map((provider)=>{
      let providerProjects = providers[provider].map((project)=><ListItem primaryText={project.title}/>)
      return <List subheader={provider}>
        {providerProjects}
      </List>
    });
    return (
      <div className="project-list">
        {projects}
      </div>)
  }
}

function mapStateToProps(state){
  let {Projects} = state;
  return {providers: Projects.providers};
}

export default connect(mapStateToProps)(ProjectList);
