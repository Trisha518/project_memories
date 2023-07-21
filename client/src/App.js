import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import UserAuth from "./UserAuth";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Navbar from "./components/Navbar";
import Home from "./Home";
import { UserProvider } from "./UserContext";

const App = () => {
  return (
    <BrowserRouter>
      <UserProvider>
        <Navbar />
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/">
            <UserAuth>
              <Home />
            </UserAuth>
          </Route>
        </Switch>
      </UserProvider>
    </BrowserRouter>
  );
};

export default App;
