import { Commande } from "../../model/Commande";

interface IState {
  commandes?: Commande[];
}

const intialState: IState = {
  commandes: undefined
};

const getCommandes = (state: any) => {
  return state.commande.commandes;
};

export const Selector = {
  getCommandes
};

const reducer = (state: IState = intialState, action: any): IState => state;

export default reducer;
