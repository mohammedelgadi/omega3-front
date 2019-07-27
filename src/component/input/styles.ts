import { createStyles, Theme } from "@material-ui/core";

export const style = (theme: Theme) =>
  createStyles({
    ".MuiInputAdornment-root": {
      color: "red"
    },
    cssLabel: {
      "&$cssFocused": {
        color: "green"
      }
    },
    cssOutlinedInput: {
      "&$cssFocused $notchedOutline": {
        borderColor: "green",
        color: "green"
      }
    },
    cssFocused: {},
    notchedOutline: {
      borderColor: "blue"
    },
    margin: {
      margin: "10px"
    },
    errorMessage: {
      color: "red"
    },
    cssHelperText: {
      color: "black",
      "&$cssFocusedHelperText": {
        color: "green"
      }
    },
    cssFocusedHelperText: {}
  });
