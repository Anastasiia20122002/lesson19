import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./reducers/authReducers";
const rootReducer = combineReducers({
  authReducer,
});
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(
      thunk,
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  )
);
export default store;
