import React, {useState} from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
const{loginAuthAction} = require('../../../redux/actions/authActions');


export const LoginScreen = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const dispatch=useDispatch();
    const handleRegister=()=>{
        
    }

    const handleSubmit=async e=>{
        e.preventDefault();
        const loginAuth=()=>dispatch(loginAuthAction(email,password));
        loginAuth();
    }
  return (
    <form className="auth-inner" onSubmit={handleSubmit}>             
        <span className="login100-form-title p-b-49">
            Login
        </span>
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
                    Login
                </button>
            </div>
        </div>
        <div className="flex-col-c p-t-60">
            <span className="txt1 p-b-17">
            You do not have an account?
            </span>
            <Link 
                    to="/auth/register"
                    className="link"
                >
                    Create new account    
                </Link>
        </div>
    </form>
  )
}