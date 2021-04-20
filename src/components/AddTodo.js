import React from "react";
import {connect} from "react-redux";
import {addTodo} from "../actions";
import './AddTodo.css'

const AddTodo =(props)=>{
  return(
    <form className='input'
      onSubmit={(event)=>{event.preventDefault();
    let input = event.target.userInput.value;
    props.dispatch(addTodo(input));
    }}>
      <input type="text" name='userInput'/>
      <button>Push</button>
    </form>
  );
}
export default connect() (AddTodo);