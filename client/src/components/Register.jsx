import React, { Component } from 'react';
import Axios from 'axios'
import "../styles/Forms.css"
import { Link } from 'react-router-dom';
class RegisterForm extends Component {

    constructor(props)
    {
        super(props);

        this.state={
            username:'',
            email: '',
            password:''
        }
    }

    getUsername=(e)=>
    {
        this.setState({username: e.target.value})
    }
    
    getEmail=(e)=>
    {
        this.setState({email: e.target.value})
    }

    getPassword=(e)=>
    {
        this.setState({password: e.target.value})
    }

    register=()=>{
        Axios.post("http://localhost:5000/register", {username: this.state.username, email: this.state.email, password: this.state.password});
    }

    render() { 
        return (
            <div className="signupBox">
                <div className="form">
                    <h1>Signup</h1>
                    <div className="inputBox">
                        <input type="text" className="inputForm" required="required" placeholder="Email Address" onChange={this.getEmail}></input>
                        <span>Email Address</span>
                        <i></i>
                    </div>
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
                    <div className="inputBox">
                        <input type="password" className="inputForm" required="required" placeholder="Confirm Password"></input>
                        <span>Confirm Password</span>
                        <i></i>
                    </div>
                    <div className="links">
                        <span><Link to="/login">Login</Link></span>
                    </div>
                    <Link to="/clubsPage">
                        <input type="submit" value="Signup" onClick={this.register}></input>
                    </Link>
                </div>
            </div>
        );
    }
}

export default RegisterForm;