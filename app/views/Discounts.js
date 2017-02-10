import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { getUsers } from '../actions/userActions';
import Header from '../components/common/Header';
import { Link } from 'react-router';
// import { getDiscounts } from '../actions/discountActions';

const mapStateToProps = function(state) {
    return {
        users: state.users
    };
}

const mapDispatchToProps = function(dispatch) {
    return {
        getUsers() {
            dispatch(getUsers())
        }
    }
}

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
        let i = 0;
        return (
            <div>
                <Header title="Manage Discounts">
                    <Link to="/discounts">Discounts</Link>
                </Header>
                <div className="wrapper wrapper-content">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="text-center m-t-lg" style={{ userSelect: 'none' }}>
                                <h1>
                                    Hello there!
                                </h1>
                                {this.props.users.gettingUsers && <p>Loading...</p>}
                                {this.props.users.users.map(user => {
                                    return <p key={ i++ }>{ `${user.firstname} ${user.lastname}`}</p>;
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            
            </div>
        )
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Discounts)