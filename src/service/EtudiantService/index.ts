import { Etudiant } from "../../model/etudiant";
import axios from "axios";

export class EtudiantService {
  public getEtudiants = (): Promise<Etudiant> => {
    return new Promise((resolve, reject) =>
      axios
        .get("http://localhost:8080/api/etudiants")
        .then(response => resolve(response.data))
        .catch(error => reject(error))
    );
  };
}
