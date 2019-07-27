import React from "react";
import Input from "../../component/input/Input";
import { EtudiantService } from "../../service/EtudiantService";

interface Props {}

export default class PageAccueil extends React.Component<Props> {
  componentDidMount() {
    const etudiantService = new EtudiantService();
    etudiantService.getEtudiants();
  }
  render() {
    return <div>Test</div>;
  }
}
