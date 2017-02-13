import React, { PropTypes } from 'react';

const UserTableItem = ({ user, manageFunc }) => {
  return (
    <tr>
      <td>{ user.firstname } { user.lastname }</td>
      <td>{ user.company }</td>
      <td>{ user.email }</td>
      <td><button type="button" className="btn btn-default" onClick={ manageFunc }>Manage</button></td>
      {/* <td className="client-status"><span className="label label-primary">Active</span></td> */}
    </tr>
  );
};

UserTableItem.propTypes = {
  'user': PropTypes.object.isRequired,
  'manageFunc': PropTypes.func.isRequired
};

export default UserTableItem;