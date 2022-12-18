import React, {useState} from "react";
import Axios from 'axios';
function App()
{
  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");

  const [usernameLog, setUsernameLog] = useState("");
  const [passwordLog, setPasswordLog] = useState("");

  const register=()=>{
    Axios.post("http://localhost:5000/register", {username: usernameReg, password: passwordReg});
  }

  const login=()=>{
    Axios.post("http://localhost:5000/login", {username: usernameLog, password: passwordLog});
  }

  return (
    <div>
      <div>
        <h1>Registration</h1>
        <label>Username</label>
        <input type="text" onChange={(e)=>{setUsernameReg(e.target.value);}}/>
        <label>Register</label>
        <input type="password" onChange={(e)=>{setPasswordReg(e.target.value);}}/>
        <button onClick={register}>Register</button>
      </div>

      <div>
        <h1>Login</h1>
        <label>Username</label>
        <input type="text" onChange={(e)=>{setUsernameLog(e.target.value);}} />
        <label>Register</label>
        <input type="password" onChange={(e)=>{setPasswordLog(e.target.value);}} />
        <button onClick={login}>Login</button>
      </div>
    </div>
  )
}

export default App;