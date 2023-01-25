import React, {useState} from "react";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ClubsPage from "./pages/ClubPage";
import TeamPage from "./pages/TeamPage";
import HomePage from "./pages/Homepage";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import "./styles/Forms.css";
import "./styles/Page.css";

function App()
{
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <RegisterPage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/clubsPage">
          <ClubsPage />
        </Route>
        <Route path="/teamPage">
          <TeamPage />
        </Route>
        <Route path="/homePage">
          <HomePage />
        </Route>
      </Switch>
    </Router>

    
  )
}

export default App;