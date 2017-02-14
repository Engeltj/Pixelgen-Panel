import React, { PropTypes } from 'react';

const OrderTableItem = ({ data, manageFunc }) => {
  return (
    <tr>
      <td>{ data._id }</td>
      <td>{ data.email }</td>
      <td>{ data.date }</td>
      <td><button type="button" className="btn btn-default" onClick={ manageFunc.bind(null, data) }>Manage</button></td>
      {/* <td className="client-status"><span className="label label-primary">Active</span></td> */}
    </tr>
  );
};

OrderTableItem.propTypes = {
  'data': PropTypes.object.isRequired,
  'manageFunc': PropTypes.func.isRequired
};

export default OrderTableItem;