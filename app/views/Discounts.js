import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

const addOneToCount = function() {
    return {
        type: 'INCREMENT',
        payload: 1
    };
}

const mapStateToProps = function(state) {
    return {
        count: state.count
    };
}

const mapDispatchToProps = function(dispatch) {
    return {
        increment() {
            dispatch(addOneToCount());
        }
    }
}

class Discounts extends Component {

    render() {
        return (
            <div className="wrapper wrapper-content animated fadeInRight">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="text-center m-t-lg" style={{ userSelect: 'none' }}>
                            <h1 onClick={ this.props.increment }>
                                Count: { this.props.count }
                            </h1>
                            <small>
                                It is an application skeleton for a typical web app. You can use it to quickly bootstrap your webapp projects.
                            </small>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Discounts)