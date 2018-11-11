import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';

import withFirebaseAuth from 'react-auth-firebase';
import { Redirect } from 'react-router-dom';
import { Col, Row } from 'reactstrap';
import Badge from '../../components/material-kit/Badge/Badge';

import firebase, { authConfig } from '../../daos/firebase';
import componentsStyle from '../../components/material-kit/material-kit-react/views/components.js';

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
      classes,
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
        <div className={classes.title}>
          <h3>Badges</h3>
        </div>
        <Badge>default</Badge>
        <Badge color="primary">primary</Badge>
        <Badge color="info">info</Badge>
        <Badge color="success">success</Badge>
        <Badge color="warning">warning</Badge>
        <Badge color="danger">danger</Badge>
        <Badge color="rose">rose</Badge>
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

export default withStyles(componentsStyle)(withFirebaseAuth(Dashboard, firebase, authConfig));
