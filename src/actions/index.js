// создаём функцию action creators, которая создаёт объект с параметрами. Она передаёт информацию в store
export const addTodo = (message) =>({
  type: 'ADD_TODO', /*тип исполняемого action*/
  message,
  id: Math.random(),
});
export const deleteTodo = (id) =>({
  type: 'DELETE_TODO',
  id,
});