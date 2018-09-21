import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Analytics from 'react-router-ga';

import AuthenticatedRoute from '../components/authenticated-route/AuthenticatedRoute';
import Login from '../containers/login/Login';

import GoogleAnalytics from '../analytics/googleAnalytics';
import Hotjar from '../analytics/hotjar';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.hotjar = new Hotjar();
    this.googleAnalytics = new GoogleAnalytics();
  }

  render() {
    return (
      <BrowserRouter>
        <Analytics id={this.googleAnalytics.gaTrackingNumber} debug>
          <div>
            <Route
              exact
              path="/login"
              render={props => {
                return <Login {...props} />;
              }}
            />
            <AuthenticatedRoute exact path="/" authenticated={true} component={Login} />
          </div>
        </Analytics>
      </BrowserRouter>
    );
  }
}

export default App;
