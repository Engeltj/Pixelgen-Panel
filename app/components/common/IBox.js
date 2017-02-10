import React, { Component, PropTypes } from 'react';
import _ from 'lodash';

class IBox extends Component {
    render() {
        let i = 0;
        let { children } = this.props;

        if (!_.isArray(children)) {
            children = [children];
        }

        let numberOfChildren = children.length;

        return (
            <div className="ibox">
                <div className="ibox-content">
                    <h2>{ this.props.title }</h2>
                    {this.props.children}
                </div>
            </div>
                    
                            




            /*<div className="row wrapper border-bottom white-bg page-heading">
                <div className="col-lg-10">
                    <h2>{ this.props.title }</h2>
                    <ol className="breadcrumb">
                        {children.map(child => {
                            const isLast = i+1 === numberOfChildren;
                            return (
                                <li key={ i++ }>{ isLast ? <strong>{child}</strong> : child }</li>
                            );
                        })}
                    </ol>
                </div>
                <div className="col-lg-2"></div>
            </div>*/
        );
    }
}

IBox.propTypes = {
    title: PropTypes.string.isRequired
};

export default IBox;