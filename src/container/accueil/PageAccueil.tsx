import React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import {
  Selector as CommandeSelector,
  ActionsCreator as CommandeActionCreator
} from "../../redux/commande";
import { Commande } from "../../model/commande";
import Types from "types";
import CommandeList from "../../component/private/commande/commandeList";

interface Props {
  commandes: Commande[];
  fetchInfo: Types.FetchInfo;
  loadCommandes(): void;
  openDetail(commande: Commande): void;
}

class PageAccueil extends React.Component<Props> {
  componentDidMount() {
    const { loadCommandes } = this.props;
    loadCommandes();
  }
  render() {
    const { commandes, fetchInfo, openDetail } = this.props;
    return (
      <CommandeList
        commandes={commandes}
        fetchInfo={fetchInfo}
        onOpenDetail={openDetail}
      />
    );
  }
}

const mapStateToProps = (state: Types.StateType) => {
  return {
    commandes: CommandeSelector.getCommandes(state),
    fetchInfo: CommandeSelector.getCommandesFetchInfo(state)
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    loadCommandes: () =>
      dispatch(CommandeActionCreator.loadCommandesAsync.request()),

    openDetail: (commande: Commande) =>
      dispatch(CommandeActionCreator.openCommandeDetailAsync.request(commande))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PageAccueil);
