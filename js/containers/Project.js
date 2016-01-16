import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as ProjectsActions from '../actions/ProjectsActions';
import { List, ListItem, ListDivider, CircularProgress} from 'material-ui';

class Project extends Component {
  componentWillMount(){
    const {dispatch} = this.props;
    const actions = bindActionCreators(ProjectsActions, dispatch);
    // actions.requestProjects(this.props.Settings);

  }
  render(){
    const {dispatch, Project} = this.props;
    const actions = bindActionCreators(ProjectsActions, dispatch);

    var content;
    if (Project.braches_loading) {
      content = (<CircularProgress mode="indeterminate"/>)
    } else {
      content = (<List>
        {
          Project.braches_loading.map((build)=>(<ListItem primaryText=""></ListItem>))
        }
      </List>)
    }

    return(
      <div className="project">
        {
          content
        }
      </div>
    )
  }

}

function mapStateToProps(state){
  let {Settings, Project} = state;
  return {Settings, Project};
}


export default connect(Project);
