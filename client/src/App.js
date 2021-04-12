import React from "react";
import { MuiThemeProvider } from "@material-ui/core";
import { BrowserRouter, Route } from "react-router-dom";

import { theme } from "./themes/theme";
import NavBar from "./components/NavBar";

// User Context Informatino
import { UserContext } from "./components/User/UserContext";
import getUserData from "./components/User/getUserData";

import "./App.css";
import Login from "./pages/Login";
import Explore from "./pages/Explore";
import Launch from "./pages/Launch";
import Home from "./pages/Home";

function App() {
  // Validate user
  const { user, setUser, isLoading } = getUserData();

  return (
    <MuiThemeProvider theme={theme}>
      <UserContext.Provider value={{ user, setUser, isLoading }}>
        <BrowserRouter>
          <NavBar />

          <Route path="/login" component={Login} />
          <Route path="/explore" component={Explore} />
          <Route path="/launch" component={Launch} />
          <Route path="/home" component={Home} />
        </BrowserRouter>
      </UserContext.Provider>
    </MuiThemeProvider>
  );
}

export default App;
