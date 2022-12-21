import React, { Component } from 'react';
import Axios from 'axios'
import './Register.css'

class RegisterForm extends Component {

    constructor(props)
    {
        super(props);

        this.register=()=>{
            Axios.post("http://localhost:5000/register", {username: this.state.username, password: this.state.password});
        }

        this.state={
            username:'',
            password:'',
        }
    }

    render() { 
        return (
            <div>
                <h1 className="formHeader">Register</h1>
                <input type="text" className="inputForm" placeholder="Email Address"></input>
                <input type="text" className="inputForm" placeholder="Username" onChange={(e)=>{this.setState({username: e.target.value})}}></input>
                <input type="password" className="inputForm" placeholder="Password" onChange={(e)=>{this.setState({password: e.target.value})}}></input>
                <input type="password" className="inputForm" placeholder="Confirm Password"></input>
                <button onClick={this.register}>Register</button>
            </div>
        );
    }
}
 
export default RegisterForm;