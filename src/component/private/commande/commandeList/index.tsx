import React from "react";
import { Commande } from "../../../../model/Commande";

interface IProps {
  commandes?: Commande[];
}

const CommandeList = (props: IProps) => {
  // destructuration
  const { commandes } = props;

  const element = commandes
    ? commandes.map(s => <div key={s.id}>s.titre</div>)
    : "Empty list";

  return <React.Fragment>{element}</React.Fragment>;
};

export default CommandeList;
