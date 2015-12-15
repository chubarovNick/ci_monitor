import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as ProjectsActions from '../actions/ProjectsActions';
import {CircularProgress, FlatButton} from 'material-ui';
import ProjectList from '../components/projects/list';

class Projects extends Component {
  componentWillMount(){
    const {dispatch} = this.props;
    const actions = bindActionCreators(ProjectsActions, dispatch);
    actions.requestProjects(this.props.Settings);
  }
  render() {
    const {dispatch} = this.props;
    const actions = bindActionCreators(ProjectsActions, dispatch);

    var content;
    if(this.props.Projects.loading){
      content = (<CircularProgress mode="indeterminate"/>)
    } else if(this.props.Projects.loading_failed) {
      content = (
        <div className="loading-failed">
          <FlatButton label="Retry" onClick={()=>actionsrequestProjects(this.props.Settings)}></FlatButton>
        </div>
      )
    } else {
      content = (<ProjectList></ProjectList>)
    }
    return (
      <main>
        {content}
      </main>
    );
  }
}

function mapStateToProps(state){
  let {Settings, Projects} = state;
  return {Settings, Projects};
}

export default connect(mapStateToProps)(Projects)
