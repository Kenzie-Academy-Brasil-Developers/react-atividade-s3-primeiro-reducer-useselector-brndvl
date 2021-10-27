import { createStore, combineReducers } from "redux";

//importante o recuder
import fruitsReducer from "./Modules/Fruits/reducer";

//combinando os reducers da aplicação nesse exemplo 
const reducers = combineReducers({fruits: fruitsReducer})

//passando os reducers combinados para a sotre
const store = createStore(reducers)

export default store