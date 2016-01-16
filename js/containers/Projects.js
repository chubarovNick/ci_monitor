import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as ProjectsActions from '../actions/ProjectsActions';
import {LinearProgress, FlatButton} from 'material-ui';
import ProjectList from '../components/projects/list';

import ShowIf from '../components/ShowIf';

class Projects extends Component {

  componentWillMount(){
    const {dispatch} = this.props;
    const actions = bindActionCreators(ProjectsActions, dispatch);
    actions.requestProjects(this.props.Settings);
  }
  
  render() {
    const {dispatch} = this.props;
    const actions = bindActionCreators(ProjectsActions, dispatch);

    return (
      <main>
        <ShowIf value={this.props.Projects.loading}>
          <LinearProgress mode="indeterminate"/>
        </ShowIf>
        <ShowIf value={this.props.Projects.loading_failed}>
          <div className="loading-failed">
            <FlatButton label="Retry" onClick={()=>actionsrequestProjects(this.props.Settings)}></FlatButton>
          </div>
        </ShowIf>
        <ShowIf value={!this.props.Projects.loading}>
          <ProjectList/>
        </ShowIf>
      </main>
    );
  }
}

function mapStateToProps(state){
  let {Settings, Projects} = state;
  return {Settings, Projects};
}

export default connect(mapStateToProps)(Projects)
