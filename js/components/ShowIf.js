import React, {Component} from 'react';

export default class ShowIf extends Component {
  render(){
    return (
      <div>
        {
          this.props.value ? this.props.children : ''
        }
      </div>
    )
  }
}
