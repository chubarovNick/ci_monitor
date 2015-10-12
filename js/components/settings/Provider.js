import React, {Component} from 'react';

class Provider extends Component {
  render(){
    return(
      <div>
        {this.props.providerType}
      </div>
    )
  }
}

export default Provider;
