import React from "react";
import { MuiThemeProvider } from "@material-ui/core";
import { BrowserRouter, Route } from "react-router-dom";

// User Context Information
import { UserContext } from "./context/UserContext";
import useGetUserData from "./hooks/useGetUserData";

import { theme } from "./themes/theme";
import NavBar from "./components/NavBar";
import "./App.css";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Explore from "./pages/Explore";
import Launch from "./pages/Launch";
import Home from "./pages/Home";

function App() {
  // Validate user
  const { user, setUser, isLoading } = useGetUserData();

  return (
    <MuiThemeProvider theme={theme}>
      <UserContext.Provider value={{ user, setUser, isLoading }}>
        <BrowserRouter>
          <NavBar />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/explore" component={Explore} />
          <Route path="/launch" component={Launch} />
          <Route path="/home" component={Home} />
        </BrowserRouter>
      </UserContext.Provider>
    </MuiThemeProvider>
  );
}

export default App;
