import commandeReducer from "./commande";
import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { createBrowserHistory } from "history";

export const rootReducer = history =>
  combineReducers({
    commande: commandeReducer,
    router: connectRouter(history)
  });
