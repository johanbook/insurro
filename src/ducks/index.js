import { combineReducers } from "redux";

import messages from "./messages/reducers";
import user from "./user/reducers";
import users from "./users/reducers";

export default combineReducers({
  messages,
  user,
  users,
});
