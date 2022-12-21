import React, { Component } from "react";
import HomeScreen from "../components/Home";
import RegisterForm from "../components/Register";
import "../styles/Page.css"
import "../styles/Forms.css"

class RegisterPage extends Component {
    state = {  } 
    render() { 
        return (
            <div className="main">
                <div className="box1">
                    <HomeScreen />
                </div>
                <div className="box2">
                    <RegisterForm />
                </div>
            </div>
        );
    }
}
 
export default RegisterPage;