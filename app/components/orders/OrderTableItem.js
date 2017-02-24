import React, { PropTypes } from 'react';

const OrderTableItem = ({ data, manageFunc }) => {
  if (!data.payment) {
    data.payment = {};
  }
  if (!data.payment.total) {
    data.payment.total = 'Not paid';
  } else if (typeof data.payment.total !== 'string') {
    data.payment.total = '$' + data.payment.total + ' USD';
  }

  return (
    <tr>
      <td>{ data._id.toUpperCase().replace(/(.{4})(.{4})(.{4})(.{4})(.{4})(.{4})/, '$4-$5-$6') }</td>
      <td>{ data.email }</td>
      <td>{ (new Date(data.date)).toLocaleString() }</td>
      <td>{ data.payment.total }</td>
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