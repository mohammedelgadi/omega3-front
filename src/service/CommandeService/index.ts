import { Commande } from "../../model/Commande";
import axios from "axios";
import { reject } from "q";

export class CommandeService {
  public getCommandes = (): Promise<Commande[]> => {
    return new Promise((resolve, reject) =>
      axios
        .get("http://localhost:8080/api/commandes")
        .then(response => resolve(response.data))
        .catch(error => reject(error))
    );
  };

  public getCommandeById = (id: number): Promise<Commande> => {
    return new Promise((resolve, reject) =>
      axios
        .get(`http://localhost:8080/api/commande/${id}`)
        .then(response => resolve(response.data))
        .catch(error => reject(error))
    );
  };
}
