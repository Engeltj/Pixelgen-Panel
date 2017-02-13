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

    return (
      <div className="m-t-lg" style={{ 'userSelect': 'none' }}>
        <IBox title={ this.props.title }>
          <div className="input-group">
            <input type="text" placeholder="Search client " className="input form-control"/>
            <span className="input-group-btn">
              <button type="button" className="btn btn btn-primary"> <i className="fa fa-search"/>Search</button>
            </span>
          </div>
          <div className="clients-list">
            <div className="full-height-scroll">
              <div className="table-responsive">
                <table className="table table-striped table-hover" style={{ 'border': '1px solid #eee' }}>
                  <tbody>
                    {this.props.users.users.map((user) => {
                      return <UserTableItem key={ user._id } user={ user } manageFunc={ this.props.manageFunc }/>;
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
  'manageFunc': PropTypes.func.isRequired,
  'children': PropTypes.object
};

export default UserTable;