import React, {useState} from 'react'
import { Link } from 'react-router-dom';
export const RegisterScreen = () => {

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

  return (
    <form className="auth-inner">             
    <span className="login100-form-title p-b-49">
        Register
    </span>

    <div className="wrap-input100 m-b-23">
        <span className="label-input100">Name</span>
        <input className="input100"
            type="text" 
            placeholder="Type your name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
        />
        <span className="focus-input100"></span>
    </div>
    <div className="wrap-input100 m-b-23">
        <span className="label-input100">Email</span>
        <input className="input100"
            type="email" 
            placeholder="Type your email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
        />
        <span className="focus-input100"></span>
    </div>

    <div className="wrap-input100">
        <span className="label-input100">Password</span>
        <input className="input100"
            type="password" 
            placeholder="Type your password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
        />
        <span className="focus-input100"></span>
    </div>
    
    <div className="text-right p-t-8 p-b-31"></div>
    
    <div className="container-login100-form-btn">
        <div className="wrap-login100-form-btn">
            <div className="login100-form-bgbtn"></div>
            <button className="login100-form-btn" type="submit" >
                Create Account
            </button>
        </div>
    </div>
    <div className="flex-col-c p-t-60">
        <span className="txt1 p-b-17">
        Do you already have an account?
        </span>
        <Link 
                    to="/auth/login"
                    className="link"
                >
                    Already registered?
        </Link>
    </div>
</form>
  )
}