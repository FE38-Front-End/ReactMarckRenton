import {combineReducers} from 'redux'
import todos from "./todos";
// корневой редьюсер- единственный редьюсер, который служит для создания единого корневого редюсера из нескольких.
//combineReducers-  преобразует объект, значениями которого являются различные функции редюсеры, в одну функцию редюсер.
const rootReducer = combineReducers({
  todos,
});
export default rootReducer;