import { combineReducers } from "redux";
import { paisesReducer, usuariosReducer } from "./ReducerPais";

const rootReducers = combineReducers({
  paisesReducer,
  usuariosReducer,
});

export default rootReducers;
