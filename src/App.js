import './App.scss';
import React from "react";
import {Button} from "./Button";

function App() {
  return (
    <div className="App">
       {(Array.from({length: 5}, () => <Button />))}
    </div>
  );
}

export default App;
