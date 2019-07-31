import React from "react";
import { Commande } from "../../../../model/Commande";
import Types from "types";

interface IProps {
  commandes?: Commande[];
  fetchInfo?: Types.FetchInfo;
  onOpenDetail(commande: Commande): void;
}

const CommandeList = (props: IProps) => {
  // destructuration
  const { commandes, fetchInfo, onOpenDetail } = props;

  const content =
    fetchInfo && fetchInfo.fetching
      ? "Chargement..."
      : commandes &&
        commandes.map(s => (
          <div onClick={() => onOpenDetail(s)} key={s.id}>
            {s.title}
          </div>
        ));

  return <React.Fragment>{content}</React.Fragment>;
};

export default CommandeList;
