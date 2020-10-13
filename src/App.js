import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
import 'bootstrap/dist/css/bootstrap.min.css';
import Website from "./components/Website"

function App() {
  return (
    <div className="App">
      <Website />   
        <h1 className="title">To-do Application</h1>
        <h6>Add, update, and delete</h6>
        <TodoList />
    </div>
  );
}

export default App;
