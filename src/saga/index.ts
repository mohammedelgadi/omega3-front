import { takeLatest } from "redux-saga/effects";
import { ActionsCreator as CommandeActionCreator } from "../redux/Commande";
import { loadCommandes } from "./commande";
import api from "../service";

export function* applicationSaga() {
  yield takeLatest(
    CommandeActionCreator.loadCommandesAsync.request,
    loadCommandes,
    api
  );
}
