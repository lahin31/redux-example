import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store'

import Todos from './components/todos'
import AddTodos from './components/addTodo';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="container">
          <h2>Create Post</h2>
          <AddTodos />
          <Todos />
        </div>
      </Provider>
    )
  }
}

export default App;