import React, { Component, PropTypes } from 'react';
import _ from 'lodash';
import { Link } from 'react-router';

class Header extends Component {
  render() {
    // let i = 0;
    // let { children } = this.props;

    // if (!_.isArray(children)) {
    //   children = [children];
    // }

    const numberOfChildren = this.props.routes.length;

    return (
      <div className="row wrapper border-bottom white-bg page-heading">
        <div className="col-lg-10">
          <h2>{ this.props.title }</h2>
          <ol className="breadcrumb">
            {this.props.routes.map((child, i) => {
              const _child = <Link key={ i } to={ child.path }>{child.name}</Link>;
              const isLast = i + 1 === numberOfChildren;
              return (
                <li key={ i++ }>{ isLast ? <strong>{_child}</strong> : _child }</li>
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
  'routes': PropTypes.array.isRequired,
  'children': PropTypes.array
};

export default Header;