import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { getUsers } from '../actions/userActions';
import Header from '../components/common/Header';
import { Link } from 'react-router';
import IBox from '../components/common/IBox';
import UserItem from '../components/users/UserItem';
// import { getDiscounts } from '../actions/discountActions';

const mapStateToProps = function (state) {
  return {
    'users': state.users
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    getUsers() {
      dispatch(getUsers());
    }
  };
};

class Discounts extends Component {
  constructor(props) {
    super(props);
        // _.bindAll(this, ['handleSubmit', 'onChange', 'checkAuth']);

        // this.state = {
        //     email: '',
        //     password: ''
        // }
  }

  componentWillMount() {
    this.props.getUsers();
  }

  componentDidUpdate() {

  }

  render() {
    const i = 0;
    return (
            <div>
                <Header title="Manage Discounts">
                    <Link to="/discounts">Discounts</Link>
                </Header>
                <div className="wrapper wrapper-content">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="m-t-lg" style={{ 'userSelect': 'none' }}>
                                <IBox title="User Accounts">
                                    <div className="input-group">
                                        <input type="text" placeholder="Search client " className="input form-control" />
                                        <span className="input-group-btn">
                                                <button type="button" className="btn btn btn-primary"> <i className="fa fa-search"></i> Search</button>
                                        </span>
                                    </div>
                                    <div className="clients-list">
                                        <div className="full-height-scroll">
                                            <div className="table-responsive">
                                                <table className="table table-striped table-hover">
                                                    <tbody>
                                                        {this.props.users.users.map((user) => {
                                                          return <UserItem key={ user._id } user={user}/>;
                                                        })}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>

                                    {this.props.users.gettingUsers && <p>Loading...</p>}

                                </IBox>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Discounts);