import React, { Component } from 'react';
import withFirebaseAuth from 'react-auth-firebase';
import { Redirect } from 'react-router-dom';
import { Col, Row } from 'reactstrap';

import firebase, { authConfig } from '../../daos/firebase';

import './Dashboard.css';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: '',
      redirect: false
    };
  }

  render() {
    const {
      signInWithEmail,
      signUpWithEmail,
      signInWithGoogle,
      signInWithFacebook,
      signInWithGithub,
      signInWithTwitter,
      facebookAccessToken,
      githubAccessToken,
      twitterAccessToken,
      twitterSecret,
      user,
      error,
      signOut
    } = this.props;
    console.log(user);

    return (
      <Col md={10} className="container-fluid">
        <h1>Here!</h1>
      </Col>
    );
  }
}

class IconAdder extends React.Component {
  render() {
    const { tag, onClick, children, ...rest } = this.props;
    const Tag = tag;

    return (
      <Tag onClick={onClick} {...rest}>
        {' '}
        {children}
      </Tag>
    );
  }
}

export default withFirebaseAuth(Dashboard, firebase, authConfig);
