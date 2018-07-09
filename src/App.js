import React, { Component } from 'react';
import './App.css';
import ToDoContainer from './todo-container/todo-container';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to ToDoApp</h1>
        </header>
       <div><ToDoContainer/></div>
      </div>
    );
  }
}

export default App;
