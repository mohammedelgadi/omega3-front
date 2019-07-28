import React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { Selector as CommandeSelector } from "../../redux/Commande";
import { Commande } from "../../model/Commande";

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
    console.log(this.props.commandes);
    return <div>Test</div>;
  }
}

const mapStateToProps = (state: any) => {
  return {
    commandes: CommandeSelector.getCommandes(state)
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    loadCommandes: () => dispatch({ type: "LOAD COMMANDE" })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PageAccueil);
