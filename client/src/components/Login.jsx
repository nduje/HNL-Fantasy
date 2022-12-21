import React, { Component } from "react";
// import Axios from 'axios'
import '../styles/Forms.css'

class LoginForm extends Component {
    
    // constructor(props)
    // {
    //     super(props);

    //     this.login=()=>{
    //         Axios.post("http://localhost:5000/login", {username: this.state.username, password: this.state.password});
    //     }

    //     this.state={
    //         username:'',
    //         password:'',
    //     }
    // }

    // onChange={(e)=>{this.setState({username: e.target.value})}}
    // onChange={(e)=>{this.setState({password: e.target.value})}}

    render() { 
        return (
            <div class="box">
                <div class="form">
                    <h1>Login</h1>
                    <div class="inputBox">
                        <input type="text" className="inputForm" required="required" placeholder="Username"></input>
                        <span>Username</span>
                        <i></i>
                    </div>
                    <div class="inputBox">
                        <input type="password" className="inputForm" required="required" placeholder="Password"></input>
                        <span>Password</span>
                        <i></i>
                    </div>
                    <div class="links">
                        <span>Signup</span>
                    </div>
                    <input type="submit" value="Login"></input>
                </div>
            </div>
        );
    }
}
 
export default LoginForm;