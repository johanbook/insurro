import { applyMiddleware, compose, createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

import rootReducer from "./ducks";

const persistedReducer = persistReducer(
  {
    key: "root",
    storage,
  },
  rootReducer
);

const initialState = {};
const middlware = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  persistedReducer,
  initialState,
  composeEnhancers(applyMiddleware(...middlware))
);
const persistor = persistStore(store);

export { persistor, store };
