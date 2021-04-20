//создаём начальное значение- пустой массив.
const initialState = {
  data: [],
};
const todos = (state = initialState, action) => {
  //функция todos- чистая (не модифицирует данные) ф-я, которая берёт предыдущее состояние и action, возвращает новое состоянеи
  // добавляем конструкцию switch case и определяем какой action сработал
  //в зависимости от action вызывается действие
  //делаем копию пустого массива спред оператором и добавляем новый объект
  // создаём новый state и возвращаем его
  //todos-  массив с объектом message и id
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        data: [
          ...state.data,
          {
            message:action.message,
            id:action.id,
          },
        ],
      };
    case 'DELETE_TODO':
      const todos =state.data.filter((todo)=> todo.id !==action.id);
      return {
        ...state,
        data: todos,
      };
    default:
      return state;
  }
}
export default todos;