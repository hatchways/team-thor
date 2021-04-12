import React from "react";
import { MuiThemeProvider } from "@material-ui/core";
import { BrowserRouter, Route } from "react-router-dom";

import { theme } from "./themes/theme";
import Home from "./pages/Home";

// User Context Informatino
import { UserContext } from "./components/User/UserContext";
import getUserData from "./components/User/getUserData";

import "./App.css";

function App() {
  // Validate user
  const { user, setUser, isLoading } = getUserData();

  return (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <UserContext.Provider value={{ user, setUser, isLoading }}>
          <Route path="/" component={Home} />
        </UserContext.Provider>
      </BrowserRouter>
    </MuiThemeProvider>
  );
}

export default App;
