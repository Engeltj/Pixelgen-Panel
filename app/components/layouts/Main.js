/* global $, window */
import React, { PropTypes } from 'react';
import { inject, observer } from 'mobx-react';
import Progress from '../common/Progress';
import Navigation from '../common/Navigation';
import Footer from '../common/Footer';
import TopHeader from '../common/TopHeader';
import { correctHeight, detectBody } from './Helpers';

// const mapStateToProps = (state) => {
//   return {
//     'user': state.auth.user,
//     'isAuthenticated': state.auth.isAuthenticated
//   };
// };

// const mapDispatchToProps = (dispatch) => ({
//   signInWithToken() {
//     dispatch(signInWithToken());
//   }
// });

@inject('auth')
@observer
class Main extends React.Component {

  componentWillMount() {
    if (this.props.auth.isAuthenticated && !this.props.auth.user) {
      this.props.auth.signInWithToken();
    }
  }

  render() {
    const wrapperClass = 'gray-bg ' + this.props.location.pathname;
    return (
      <div id="wrapper">
        <Progress/>
        <Navigation location={ this.props.location }/>

        <div id="page-wrapper" className={ wrapperClass }>

          <TopHeader/>

          {this.props.children}

          <Footer/>

        </div>

      </div>

    );
  }

  componentDidMount() {
        // Run correctHeight function on load and resize window event
    $(window).bind('load resize', () => {
      correctHeight();
      detectBody();
    });

        // Correct height of wrapper after metisMenu animation.
    $('.metismenu a').click(() => {
      setTimeout(() => {
        correctHeight();
      }, 300);
    });
  }
}

export default Main;