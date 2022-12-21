import React, { Component } from "react";
import HomeScreen from "../components/Home";
import RegisterForm from "../components/Register";

class RegisterPage extends Component {
    state = {  } 
    render() { 
        return (
            <div className="main">
                <HomeScreen />
                <hr className="vertical"></hr>
                <RegisterForm />
            </div>
        );
    }
}
 
export default RegisterPage;