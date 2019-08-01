import { call, put } from "redux-saga/effects";
import { push } from "react-router-redux";
import { Api } from "../../service";
import { ActionsCreator as CommandeActionCreator } from "../../redux/commande/index";
import { CommandeDetail } from "../../model/commande";

export function* loadCommandes(api: Api, action) {
  try {
    console.log("lancement de la saga", "loadCommandes");
    const commandes = yield call(api.getCommandes);
    yield put(CommandeActionCreator.loadCommandesAsync.success(commandes));
    console.log(commandes);
  } catch (error) {
    console.log(error);
  }
}

export function* loadCommandeDetail(api: Api, action) {
  const detail = { ...action.payload } as CommandeDetail;
  detail.detail = "Le detail du contenu";

  console.log("lancement de la saga", "loadCommandeDetail");
  console.log(action.payload);
  yield put(CommandeActionCreator.openCommandeDetailAsync.success(detail));
  yield put(push("/commande-detail"));
}
