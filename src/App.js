import React from "react";
import './App.css';
import AddTodo from "./components/AddTodo";
import List from "./List";

function App() {
  return (
    <div className='app'>
      <AddTodo/>
      <List/>
    </div>
  );
}

export default App;
