import { useState } from "react";

const Signup = () => {
    const [name, setName]=useState("");
    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("");
    const collectData = () => {
        console.log(name, email, password)
    }
    return (
      <div className="wrapper signupContainer">
        <h1>Register</h1> 
        <input className="defaultInput" type="text" placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)}></input>
        <input className="defaultInput" type="text" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
        <input className="defaultInput" type="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
        <button onClick={collectData} className="defaultButton" type="button">Signup</button>
      </div>
    );
  };
  
export default Signup;
  