import React, { PropTypes } from 'react';

const UserItem = ({ user }) => {
  return (
    <tr>
      <td><a data-toggle="tab" href="#contact-1" className="client-link">{ user.firstname } { user.lastname }</a></td>
      <td> {user.company}</td>
      <td className="contact-type"><i className="fa fa-envelope"> </i></td>
      <td> { user.email }</td>
      {/*<td className="client-status"><span className="label label-primary">Active</span></td>*/}
    </tr>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired
};

export default UserItem;