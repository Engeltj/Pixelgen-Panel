/* global $ */
import React, { PropTypes } from 'react';

class Blank extends React.Component {

  static propTypes = {
    'children': PropTypes.node
  };

  componentDidMount() {
    $('body').addClass('gray-bg');
  }

  componentWillUnmount() {
    $('body').removeClass('gray-bg');
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default Blank;