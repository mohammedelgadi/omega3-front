import { takeLatest } from "redux-saga/effects";
import { ActionsCreator as CommandeActionCreator } from "../redux/commande";
import { loadCommandes, loadCommandeDetail } from "./commande";
import api from "../service";

export function* applicationSaga() {
  yield takeLatest(
    CommandeActionCreator.loadCommandesAsync.request,
    loadCommandes,
    api
  );

  yield takeLatest(
    CommandeActionCreator.openCommandeDetailAsync.request,
    loadCommandeDetail,
    api
  );
}
