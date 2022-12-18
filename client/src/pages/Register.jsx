import React, { Component } from "react";
import './Register.css'

class RegisterForm extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                <h1 class="formHeader">Register</h1>
                <input type="text" class="inputForm" placeholder="Email Address"></input>
                <input type="text" class="inputForm" placeholder="Username"></input>
                <input type="password" class="inputForm" placeholder="Password"></input>
                <input type="password" class="inputForm" placeholder="Confirm Password"></input>
            </div>
        );
    }
}
 
export default RegisterForm;