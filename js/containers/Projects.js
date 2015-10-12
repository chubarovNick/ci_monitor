import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as SettingsActions from '../actions/SettingsActions';
import styles from '../../css/app.css';
import {Toggle, List, ListItem, ListDivider, FlatButton} from 'material-ui';
import Icon from 'react-fa';

class Projects extends Component {
  render() {
    return (
      <main>
      </main>
    );
  }
}

export default connect(state => state.Projects)(Projects)