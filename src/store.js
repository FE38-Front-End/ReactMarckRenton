//createStore- хранит полное дерево состояния приложения.

import {createStore} from "redux";
import rootReducer from "./reducers";
const store = createStore(rootReducer);
//store-объект, который содержит полное состояние вашего приложения (изменяется action)

export default store;