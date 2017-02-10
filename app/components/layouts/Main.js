import React from 'react';
import { connect } from 'react-redux';
import Progress from '../common/Progress';
import Navigation from '../common/Navigation';
import Footer from '../common/Footer';
import TopHeader from '../common/TopHeader';
import { correctHeight, detectBody } from './Helpers';
import { signInWithToken } from '../../actions/authActions';
import DevTools from '../developer/DevTools';

const mapStateToProps = (state) => {
  return {
    'user': state.auth.user,
    'isAuthenticated': state.auth.isAuthenticated
  };
};

const mapDispatchToProps = (dispatch) => ({
  signInWithToken() {
    dispatch(signInWithToken());
  }
});

class Main extends React.Component {

  componentWillMount() {
    if (this.props.isAuthenticated && !this.props.user) {
      this.props.signInWithToken();
    }
  }

  render() {
    const wrapperClass = 'gray-bg ' + this.props.location.pathname;
    return (
            <div id="wrapper">
                <DevTools />
                <Progress />
                <Navigation location={this.props.location}/>

                <div id="page-wrapper" className={wrapperClass}>

                    <TopHeader />

                    {this.props.children}

                    <Footer />

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

export default connect(mapStateToProps, mapDispatchToProps)(Main);