import React from "react";
import { SelectOption } from "../../metier/model/Models";

interface Props {
  label?: string;
  options?: Array<SelectOption>;
}

export default class Select extends React.Component<Props> {
  render() {
    return <input name={this.props.label} />;
  }
}
