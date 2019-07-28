import { call } from "redux-saga/effects";
import { Api } from "../../service";

export function* loadCommandes(api: Api, action) {
  try {
    console.log("lancement de la saga");
    const commandes = yield call(api.getCommandes);
    console.log(commandes);
  } catch (error) {
    console.log(error);
  }
}
