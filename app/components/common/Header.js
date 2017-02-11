import React, { Component, PropTypes } from 'react';
import _ from 'lodash';

class Header extends Component {
  render() {
    let i = 0;
    let { children } = this.props;

    if (!_.isArray(children)) {
      children = [children];
    }

    const numberOfChildren = children.length;

    return (
      <div className="row wrapper border-bottom white-bg page-heading">
        <div className="col-lg-10">
          <h2>{ this.props.title }</h2>
          <ol className="breadcrumb">
            {children.map((child) => {
              const isLast = i + 1 === numberOfChildren;
              return (
                <li key={ i++ }>{ isLast ? <strong>{child}</strong> : child }</li>
              );
            })}
          </ol>
        </div>
        <div className="col-lg-2"/>
      </div>
    );
  }
}

Header.propTypes = {
  'title': PropTypes.string.isRequired,
  'children': PropTypes.object
};

export default Header;