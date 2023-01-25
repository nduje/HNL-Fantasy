import React, { Component } from "react";
import Axios from 'axios'
import '../styles/Forms.css'
import { Link } from 'react-router-dom';
class LoginForm extends Component {
    
    constructor(props)
    {
        super(props);

        this.state={
            username: '',
            password: '',
        }
    }

    getUsername=(e)=>
    {
        this.setState({username: e.target.value})
    }

    getPassword=(e)=>
    {
        this.setState({password: e.target.value})
    }

    login=()=>{
        Axios.post("http://localhost:5000/login", {username: this.state.username, password: this.state.password});
    }

    render() { 
        return (
            <div className="box">
                <div className="form">
                    <h1>Login</h1>
                    <div className="inputBox">
                        <input type="text" className="inputForm" required="required" placeholder="Username" onChange={this.getUsername}></input>
                        <span>Username</span>
                        <i></i>
                    </div>
                    <div className="inputBox">
                        <input type="password" className="inputForm" required="required" placeholder="Password" onChange={this.getPassword}></input>
                        <span>Password</span>
                        <i></i>
                    </div>
                    <div className="links">
                       <span><Link to="/">Signup</Link></span>
                    </div>
                    <div className="links">
                    <Link to="/homePage">
                       <input type="submit" value="Login" onClick={this.login}></input>
                    </Link>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default LoginForm;