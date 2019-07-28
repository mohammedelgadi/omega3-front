import React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import {
  Selector as CommandeSelector,
  ActionsCreator as CommandeActionCreator
} from "../../redux/Commande";
import { Commande } from "../../model/Commande";
import Types from "types";
import CommandeList from "../../component/private/commande/commandeList";

interface Props {
  commandes: Commande[];
  loadCommandes(): void;
}

class PageAccueil extends React.Component<Props> {
  componentDidMount() {
    const { loadCommandes } = this.props;
    loadCommandes();
  }
  render() {
    const { commandes } = this.props;
    return <CommandeList commandes={commandes} />;
  }
}

const mapStateToProps = (state: Types.StateType) => {
  return {
    commandes: CommandeSelector.getCommandes(state)
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    loadCommandes: () =>
      dispatch(CommandeActionCreator.loadCommandesAsync.request())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PageAccueil);
