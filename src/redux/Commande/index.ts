import Types from "types";
import { createAsyncAction, getType, ActionType } from "typesafe-actions";
import { Commande, CommandeDetail } from "../../model/commande";

interface IState {
  commandes?: Commande[];
  commandeDetail?: CommandeDetail;
  fetchInfo: Types.FetchInfo;
}

const intialState: IState = {
  commandes: undefined,
  commandeDetail: undefined,
  fetchInfo: {
    fetching: false,
    error: undefined
  }
};

const loadCommandesAsync = createAsyncAction(
  "LOAD_COMMANDES_REQUEST",
  "LOAD_COMMANDES_SUCCESS",
  "LOAD_COMMANDES_FAILURE"
)<void, Commande[], any>();

const openCommandeDetailAsync = createAsyncAction(
  "OPEN_COMMANDE_DETAIL_REQUEST",
  "OPEN_COMMANDE_DETAIL_SUCCESS",
  "OPEN_COMMANDE_DETAIL_FAILURE"
)<Commande, CommandeDetail, any>();

export const ActionsCreator = {
  loadCommandesAsync,
  openCommandeDetailAsync
};

const getCommandes = (state: Types.StateType) => {
  return state.commande.commandes;
};

const getCommandesFetchInfo = (state: Types.StateType) => {
  return state.commande.fetchInfo;
};

export const Selector = {
  getCommandes,
  getCommandesFetchInfo
};

const reducer = (
  state = intialState,
  action: ActionType<typeof ActionsCreator>
): IState => {
  switch (action.type) {
    case getType(loadCommandesAsync.request):
      console.log("Load commande action running");
      return {
        ...state,
        fetchInfo: {
          fetching: true,
          error: undefined
        }
      };

    case getType(loadCommandesAsync.success):
      console.log("avec success");
      return {
        ...state,
        commandes: action.payload,
        fetchInfo: {
          fetching: false,
          error: undefined
        }
      };

    case getType(loadCommandesAsync.failure):
      console.log("avec erreur");
      return {
        ...state,
        fetchInfo: {
          fetching: false,
          error: action.payload
        }
      };
    case getType(openCommandeDetailAsync.request):
      console.log("test");
      return {
        ...state,
        fetchInfo: {
          fetching: true,
          error: undefined
        }
      };
    case getType(openCommandeDetailAsync.success):
      console.log("test");
      return {
        ...state,
        commandeDetail: action.payload,
        fetchInfo: {
          fetching: false,
          error: undefined
        }
      };
    case getType(openCommandeDetailAsync.failure):
      console.log("test");
      return {
        ...state,
        fetchInfo: {
          fetching: false,
          error: action.payload
        }
      };
  }

  return state;
};

export default reducer;
