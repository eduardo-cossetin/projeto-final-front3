import { combineReducers } from "redux";
import usersSlice from "./Users/UsersSlice";
import loadingSlice from "./loading/loadingSlice";

const rootReducer = combineReducers({
  // a cada novo slice, adicionamos uma nova propriedade neste objeto
  // propriedade - nome da store
  // valor - reducer/manager deste estado global
  users: usersSlice,
  loading: loadingSlice,
});

export default rootReducer;
