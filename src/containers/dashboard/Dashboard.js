import React, { Component } from 'react';
import classNames from 'classnames';
import withFirebaseAuth from 'react-auth-firebase';
import withStyles from '@material-ui/core/styles/withStyles';
import { Col, Row } from 'reactstrap';
import { Redirect } from 'react-router-dom';

import Badge from '../../components/material-kit/Badge/Badge';
import GridContainer from '../../components/material-kit/Grid/GridContainer';
import GridItem from '../../components/material-kit/Grid/GridItem';
import Header from '../../components/material-kit/Header/Header';
import HeaderLinks from '../../components/material-kit/Header/HeaderLinks';
import Parallax from '../../components/material-kit/Parallax/Parallax';

import firebase, { authConfig } from '../../daos/firebase';
import componentsStyle from '../../components/material-kit/material-kit-react/views/components.js';

import './Dashboard.css';

import bg4 from '../../assets/img/bg4.jpg';

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
      signOut,
      ...rest
    } = this.props;
    console.log(user);

    return (
      <div>
        <Header
          brand="Brain Bit Ledger"
          rightLinks={<HeaderLinks />}
          color="dark"
          changeColorOnScroll={{
            height: 400,
            color: 'black'
          }}
          {...rest}
        />
        <div style={{ height: 50 }} />

        <div className={classNames(classes.main, classes.mainRaised)}>
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
          <h1 style={{ height: 900 }}>Here!</h1>
        </div>
      </div>
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
