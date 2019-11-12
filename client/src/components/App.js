import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Landing from './Landing';
import Intro from './Intro'
import Dashboard from './Dashboard';
import SurveyNew from './surveys/SurveyNew';


class App extends React.Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <BrowserRouter>
        <div className="pusher">
          <div className="ui vertical masthead center aligned segment" style={{minHeight: "100vh", paddingTop: 0}}>
            <Header />
            <Route path="/" exact component={Landing} />
            <Route path="/us" exact component={Intro} />
            <Route path="/surveys" exact component={Dashboard} />
            <Route path="/surveys/new" component={SurveyNew} />
          </div>
        </div>
      </BrowserRouter>
    )
  }
}

export default connect(null, actions)(App);