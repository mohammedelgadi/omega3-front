import { Commande } from "../../model/commande";

export interface Api {
  getCommandes(): Promise<Commande[]>;
  getCommandeById(id: number): Promise<Commande>;
}

export const create = axios => {
  const getCommandes = (): Promise<Commande[]> => {
    return new Promise((resolve, reject) =>
      axios
        .get("http://localhost:8080/api/commandes")
        .then(response => resolve(response.data))
        .catch(error => reject(error))
    );
  };

  const getCommandeById = (id: number): Promise<Commande> => {
    return new Promise((resolve, reject) =>
      axios
        .get(`http://localhost:8080/api/commande/${id}`)
        .then(response => resolve(response.data))
        .catch(error => reject(error))
    );
  };

  return {
    getCommandes,
    getCommandeById
  };
};
