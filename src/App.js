import React, { Component } from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import { connect } from 'react-redux';
import * as action from './actions/actions';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {
  componentDidMount() {
    this.props.setData()
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Layout />
        </div>
      </BrowserRouter>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setData: () => {
      return dispatch(action.getDataFromFirebase())
    }
  }
}

export default connect(null, mapDispatchToProps)(App);
