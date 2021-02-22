import React, {useState} from 'react';
import plus from "./img/pl.png";
import update from "./img/update.png";
import minus from "./img/minus.png";

function Button() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  }
  const decrement = () => {
    setCount(count - 1);

  }
  const throwOff = () => {
    setCount(count - count);
  }
  return (
    <div  className="containerComponent">
      <div  className="number">{count}</div>
      <div className="Button">
        <button onClick={increment} className="btn"><img className="plus img" src={plus} alt="plus"/></button>
        <button onClick={throwOff} className="btn"><img className="update img" src={update} alt="update"/></button>
        <button onClick={decrement} className="btn"><img className="minus img" src={minus} alt="minus"/></button>
      </div>
    </div>
);

}

export {Button};