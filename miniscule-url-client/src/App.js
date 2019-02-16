import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';

import AuthForm from './components/AuthForm';

import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <AuthForm />
        </div>
      </Provider>
    );
  }
}

export default App;
