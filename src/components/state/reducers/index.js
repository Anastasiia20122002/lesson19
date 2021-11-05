import { combineReducers } from "redux";
import infoUser from "./infoUser";

const reducers = combineReducers({
  infoUser: infoUser,
});
export default reducers;
