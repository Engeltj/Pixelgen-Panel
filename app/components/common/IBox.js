import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

class IBox extends Component {

  static propTypes = {
    'children': PropTypes.node
  };

  render() {
    let { children } = this.props;

    if (!_.isArray(children)) {
      children = [children];
    }

    return (
      <div className="ibox">
        <div className="ibox-content">
          <h2>{ this.props.title }</h2>
          { this.props.children }
        </div>
      </div>
    );
  }

}

IBox.propTypes = {
  'title': PropTypes.string.isRequired
};

export default IBox;