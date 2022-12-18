import React, { Component } from "react";
import './Login.css'

class LoginForm extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                <h1 class="formHeader">Login</h1>
                <input type="text" class="inputForm" placeholder="Username or email"></input>
                <input type="password" class="inputForm" placeholder="Password"></input>
                <label class="signup">Sign-up here</label>
            </div>
        );
    }
}
 
export default LoginForm;