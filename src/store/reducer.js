import { combineReducers } from "redux-immutable";
import { reducer as accountReducer } from "../components/AccountPage/store";
import { reducer as mainPageReducer } from "../components/MainPage/store";

const reducer = combineReducers({
  account: accountReducer,
  mainPage: mainPageReducer,
});

export default reducer;
