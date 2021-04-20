import React from "react";
import {connect} from "react-redux";
import {deleteTodo} from "./actions";

const List = (props) => {
  return (
    <ul>
      {props.todos.map((todo, index) => (
        <li key={index}>
          {todo.message}
          <button className='btnDel' onClick={()=>props.dispatch(deleteTodo(todo.id))}>Del</button>
        </li>
      ))}
    </ul>
  );
};
//todos-  массив с объектом message и id
//mapStateToProps
const mapStateToProps = (state) => ({
  todos: state.todos.data,

});
// оборачиваем компанент List в функцию connect
//connect принимает функцию mapStateToProps
export default connect(mapStateToProps)(List);