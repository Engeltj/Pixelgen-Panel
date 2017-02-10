import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { getUsers } from '../actions/userActions';
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
        return (
            <div className="wrapper wrapper-content">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="text-center m-t-lg" style={{ userSelect: 'none' }}>
                            <h1>
                                Hello there!
                            </h1>
                            <small>How are you?</small>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Discounts)