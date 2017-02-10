import React, { PropTypes } from 'react';

const UserItem = ({ user }) => {
  return (
    <tr>
      <td>{ user.firstname } { user.lastname }</td>
      <td> {user.company}</td>
      <td> { user.email }</td>
      {/* <td className="client-status"><span className="label label-primary">Active</span></td> */}
    </tr>
  );
};

UserItem.propTypes = {
  'user': PropTypes.object.isRequired
};

export default UserItem;