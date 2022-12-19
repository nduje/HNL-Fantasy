import React, { Component } from "react";
import Axios from 'axios'
import './Login.css'

class LoginForm extends Component {
    
    constructor(props)
    {
        super(props);

        this.login=()=>{
            Axios.post("http://localhost:5000/login", {username: this.state.username, password: this.state.password});
        }

        this.state={
            username:'',
            password:'',
        }
    }

    render() { 
        return (
            <div>
                <h1 className="formHeader">Login</h1>
                <input type="text" className="inputForm" placeholder="Username or email" onChange={(e)=>{this.setState({username: e.target.value})}}></input>
                <input type="password" className="inputForm" placeholder="Password" onChange={(e)=>{this.setState({password: e.target.value})}}></input>
                <button onClick={this.login}> Sign </button>
            </div>
        );
    }
}
 
export default LoginForm;