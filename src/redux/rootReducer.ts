import commandeReducer from "./Commande";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({ commande: commandeReducer });
