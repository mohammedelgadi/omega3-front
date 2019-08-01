import {
  create as createCommandeService,
  Api as ApiCommande
} from "./commandeService";

import axios from "axios";

export type Api = ApiCommande;

const service = {
  ...createCommandeService(axios)
};

export default service;
