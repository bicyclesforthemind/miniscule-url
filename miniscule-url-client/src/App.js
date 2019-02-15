import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';

import Login from './components/Login';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Login />
        </div>
      </Provider>
    );
  }
}

export default App;
