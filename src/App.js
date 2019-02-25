import React, { Component } from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './store/reducer.js';

import Counter from './containers/Counter/Counter';
import './App.css';

const currentStore = createStore(reducer)
class App extends Component {
  render() {
    return (
      <Provider store={currentStore}>
      <div className="App">
       <Counter />
      </div>
      </Provider>
    );
  }
}

export default App;
