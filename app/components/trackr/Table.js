import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import IBox from '../common/IBox';

class Table extends Component {
  static propTypes = {
    'title': PropTypes.string.isRequired,
    'headers': PropTypes.array.isRequired,
    'children': PropTypes.array
  };

  render() {
    const i = 0;
    let { children } = this.props;

    if (!_.isArray(children)) {
      children = [children];
    }

    const numberOfChildren = children.length;

    return (
      <div className="" style={{ 'userSelect': 'none' }}>
        <IBox title={ this.props.title }>
          
          <div className="clients-list">
            <div className="full-height-scroll">
              <div className="table-responsive">
                <table className="table table-striped table-hover" style={{ 'border': '1px solid #eee' }}>
                  <thead>
                    <tr>
                      {_.map(this.props.headers, (header, i) => {
                        return <th key={ i }>{header}</th>;
                      })}
                    </tr>
                  </thead>
                  <tbody>
                    {children.map((child) => {
                      const isLast = i + 1 === numberOfChildren;
                      return (
                        child
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </IBox>
      </div>
    );
  }
}

export default Table;
