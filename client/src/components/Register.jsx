import React, { Component } from 'react';
import Axios from 'axios'

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
            <div>
                <h1 className="formHeader">Register</h1>
                <input type="text" className="inputForm" placeholder="Email Address" onChange={this.getEmail}></input>
                <input type="text" className="inputForm" placeholder="Username" onChange={this.getUsername}></input>
                <input type="password" className="inputForm" placeholder="Password" onChange={this.getPassword}></input>
                <input type="password" className="inputForm" placeholder="Confirm Password"></input>
                <button onClick={this.register}>Register</button>
            </div>
        );
    }
}
 
export default RegisterForm;