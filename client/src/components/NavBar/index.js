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
  },
}));

function NavBar() {
  const classes = useStyles();

  return (
    <Box display="flex" justifyContent="space-between" padding="8px">
      {/* Logo and title  */}
      <Box display="flex" id="nav-Left">
        <img src={logo} className={classes.logo} />
        <Typography variant="h6">Product Launch</Typography>
      </Box>

      {/* Links and login */}
      <Box display="flex" id="nav-Right">
        <Link className={classes.link} to="explore">
          EXPLORE
        </Link>
        <Link className={classes.link} to="explore">
          LAUNCH
        </Link>
        <Link className={classes.link} to="explore">
          LOGIN
        </Link>
      </Box>
    </Box>
  );
}

export default NavBar;
