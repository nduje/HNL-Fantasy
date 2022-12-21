import React, { Component } from "react";
import HomeScreen from "../components/Home";
import RegisterForm from "../components/Register";

class LoginPage extends Component {
    state = {  } 
    render() { 
        return (
            <div class="main">
                <HomeScreen />
                <hr class="vertical"></hr>
                <RegisterForm />
            </div>
        );
    }
}
 
export default LoginPage;