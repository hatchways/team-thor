import { Box, makeStyles, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import logo from "./ic-logo.png";

const useStyles = makeStyles((theme) => ({
  logo: {
    height: 34,
    width: 34,
    marginRight: 8,
  },
  link: {
    marginLeft: 24,
    textDecoration: "none",
    padding: 1,
    color: theme.palette.common.black,
  },
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: 12,
    borderBottom: `1px solid ${theme.palette.primary.shadow}`,
  },

  active: {
    marginTop: 2,
    borderBottom: `2px solid ${theme.palette.primary.main}`,
  },
}));

function NavBar() {
  const classes = useStyles();

  return (
    <Box className={classes.nav}>
      {/* Logo and title  */}
      <Box display="flex" id="nav-Left">
        <img src={logo} className={classes.logo} />
        <Typography variant="h6">Product Launch</Typography>
      </Box>

      {/* Links and login */}
      <Box display="flex" alignItems="center" id="nav-Right">
        <Link className={classes.link} to="explore">
          <Typography variant="subtitle1" className={classes.active}>
            EXPLORE
          </Typography>
        </Link>
        <Link className={classes.link} to="launch">
          <Typography variant="subtitle1">LAUNCH</Typography>
        </Link>
        <Link className={classes.link} to="login">
          <Typography variant="subtitle1">LOGIN</Typography>
        </Link>
      </Box>
    </Box>
  );
}

export default NavBar;
