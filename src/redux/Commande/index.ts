import Types from "types";
import { createAsyncAction, getType } from "typesafe-actions";
import { Commande } from "../../model/Commande";

interface IState {
  commandes?: Commande[];
  fetchInfo: any;
}

const intialState: IState = {
  commandes: undefined,
  fetchInfo: undefined
};

const loadCommandesAsync = createAsyncAction(
  "LOAD_COMMANDES_REQUEST",
  "LOAD_COMMANDES_SUCCESS",
  "LOAD_COMMANDES_FAILURE"
)<void, Commande[], any>();

export const ActionsCreator = {
  loadCommandesAsync
};

const getCommandes = (state: Types.StateType) => {
  return state.commande.commandes;
};

export const Selector = {
  getCommandes
};

const reducer = (state: IState = intialState, action: any): IState => {
  switch (action.type) {
    case getType(loadCommandesAsync.request):
      console.log("Load commande action running");
      return {
        ...state
      };
  }

  return state;
};

export default reducer;
