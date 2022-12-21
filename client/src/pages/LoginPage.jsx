import React, { Component } from "react";
import HomeScreen from "../components/Home";
import LoginForm from "../components/Login";
import "../styles/Page.css"
import "../styles/Forms.css"

class LoginPage extends Component {
    state = {  } 
    render() { 
        return (
            <div className="main">
                <div className="box1">
                    <HomeScreen />
                </div>
                <div className="box2">
                    <LoginForm />
                </div>
            </div>

        );
    }
}
 
export default LoginPage;