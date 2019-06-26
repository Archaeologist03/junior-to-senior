import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';

import { setSearchField, requestRobots } from '../actions';
import MainPage from '../components/MainPage';

class App extends Component {

  componentDidMount() {
    console.log(process.env.REACT_APP_SAY_HI);
    
  }

  render() {
    return <MainPage {...this.props} />;
  }
}

const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: e => dispatch(setSearchField(e.target.value)),
    onRequestRobots: () => dispatch(requestRobots()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
