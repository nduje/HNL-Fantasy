import React, {useState} from "react";
import HomeScreen from "./pages/Home";
import LoginForm from "./pages/Login";
import RegisterForm from "./pages/Register";
import './App.css'

function App()
{
  return (
    <div className="componentContainer">
        <HomeScreen />
        <LoginForm />
        <RegisterForm />
    </div>
  );
}

export default App;