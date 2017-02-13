import React, { Component, PropTypes } from 'react';
import _ from 'lodash';
import IBox from '../common/IBox';
import UserTableItem from './UserTableItem';

class UserTable extends Component {
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
          <div className="input-group">
            <input type="text" placeholder="Search" className="input form-control"/>
            <span className="input-group-btn">
              <button type="button" className="btn btn btn-primary"> <i className="fa fa-search"/>&nbsp;Filter</button>
            </span>
          </div>
          <div className="clients-list">
            <div className="full-height-scroll">
              <div className="table-responsive">
                <table className="table table-striped table-hover" style={{ 'border': '1px solid #eee' }}>
                  <thead>
                    <tr>
                    {_.map(this.props.headers, (header, i) => {
                      return <th key={i}>{header}</th>;
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

          {this.props.users.gettingUsers && <p>Loading...</p>}

        </IBox>

      </div>

      /* <div className="row wrapper border-bottom white-bg page-heading">
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
      </div> */
    );
  }
}

UserTable.propTypes = {
  'title': PropTypes.string.isRequired,
  'users': PropTypes.object.isRequired,
  'headers': PropTypes.array.isRequired,
  'manageFunc': PropTypes.func.isRequired,
  'children': PropTypes.array
};

export default UserTable;