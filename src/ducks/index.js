import { combineReducers } from "redux";

import messages from "./messages/reducers";
import user from "./user/reducers";

export default combineReducers({
  messages,
  user,
});
