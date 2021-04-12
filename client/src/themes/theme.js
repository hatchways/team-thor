import { createMuiTheme } from "@material-ui/core";

export const theme = createMuiTheme({
  typography: {
    fontFamily: "ProximaNova-Semibold",
    fontSize: 12,
    h6: {
      fontFamily: "Gilroy",
      fontWeight: 700,
      fontSize: 24,
      // could customize the h1 variant as well
    },
  },
  palette: {
    primary: { main: "#69E781" },
  },
});
