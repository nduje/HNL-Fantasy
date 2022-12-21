import React, { Component } from "react";
import HomeScreen from "../components/Home";
import LoginForm from "../components/Login";
import "../styles/Page.css"
import "../styles/Forms.css"

class LoginPage extends Component {
    state = {  } 
    render() { 
        return (
            <div class="main">
                <div class="box1">
                    <HomeScreen />
                </div>
                <div class="box2">
                    <LoginForm />
                </div>
            </div>

        );
    }
}
 
export default LoginPage;