import React from "react";
import { FormControl, withStyles } from "@material-ui/core";
import { style } from "./styles";

interface Props {
  id?: string;
  label?: string;
  name?: string;
  value?: string;
  classes?: any;
}

class Input extends React.Component<Props> {
  componentDidMount() {
    console.log("component did mount");
  }
  render() {
    const { classes } = this.props;
    return (
      <FormControl>
        <div>Holla commo esta</div>
      </FormControl>
    );
  }
}

export default withStyles(style)(Input);
