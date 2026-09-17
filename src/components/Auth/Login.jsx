import { useState } from "react";

const Login = ({ handleLogin }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = (e)=>{
        e.preventDefault()
        handleLogin(email,password)
        setEmail("")
        setPassword("")
    }

  return (
    <div className="login-page">
      <div className="login-panel">
        <p className="eyebrow">Employee management system</p>
        <h1>Welcome back</h1>
        <p>Sign in to manage your workspace.</p>
        <form 
        onSubmit={(e)=>{submitHandler(e)}}
        className="login-form">
          <input
            value={email}
            onChange={(e)=>{
                setEmail(e.target.value)
            }}
            required
            className=""
            type="email"
            placeholder="Enter Email"
          />
          <input
           value={password}
            onChange={(e)=>{
                setPassword(e.target.value)
            }}
            required
             className=""
            type="password"
            placeholder="Enter Password"
          />
          <button>
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
