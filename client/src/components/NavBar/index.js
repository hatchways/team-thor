import {
  Avatar,
  Box,
  Button,
  makeStyles,
  Typography,
  Menu,
  MenuItem,
} from "@material-ui/core";
import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { UserContext } from "../User/UserContext";
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
  subLink: {
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
  const { user, isLoading } = useContext(UserContext);

  // Dropdown for User Profile
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box className={classes.nav}>
      {/* Logo and title  */}
      <Box display="flex" id="nav-Left">
        <img src={logo} className={classes.logo} alt="Logo" />
        <Typography variant="h6">Product Launch</Typography>
      </Box>

      {/* Links and login */}
      <Box display="flex" alignItems="center" id="nav-Right">
        <NavLink
          className={classes.link}
          to="explore"
          activeClassName={classes.active}
        >
          <Typography variant="subtitle1">EXPLORE</Typography>
        </NavLink>
        <NavLink
          className={classes.link}
          to="launch"
          activeClassName={classes.active}
        >
          <Typography variant="subtitle1">LAUNCH</Typography>
        </NavLink>

        {/* Display login or user data, depending on login */}
        {user ? (
          <NavLink
            className={classes.link}
            to="login"
            activeClassName={classes.active}
          >
            <Typography variant="subtitle1">LOGIN</Typography>
          </NavLink>
        ) : (
          <div>
            <Button
              display="flex"
              flexDirection="row"
              alignItems="center"
              className={classes.link}
              aria-controls="userDropdown"
              aria-haspopup="true"
              onClick={handleClick}
            >
              <Typography variant="subtitle1">
                {user ? user.username : "Test Name"}
              </Typography>
              <Avatar></Avatar>
            </Button>
            <Menu
              id="userDropdown"
              anchorEl={anchorEl}
              // Align popup menu underneath username
              getContentAnchorEl={null}
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>
                <NavLink to="home" className={classes.subLink}>
                  <Typography variant="subtitle1">Profile</Typography>
                </NavLink>
              </MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </div>
        )}
      </Box>
    </Box>
  );
}

export default NavBar;
