import { createMuiTheme } from "@material-ui/core";

export const theme = createMuiTheme({
  typography: {
    fontFamily: "'Proxima Nova', 'Roboto'",
    fontSize: 12,
    h6: {
      fontFamily: "Gilroy-Medium",
      fontSize: 24,
      // could customize the h1 variant as well
    },
    subtitle1: {
      fontSize: 14,
      fontWeight: 400,
      lineHeight: 1,
    },
  },
  palette: {
    primary: { main: "#69E781", shadow: "#E8E8E8" },
  },
});
