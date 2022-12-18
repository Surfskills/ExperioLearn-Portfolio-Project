import style from "../styles/Signin.module.css"
import { useState } from "react";
import React from 'react'
import Register from "./register";

      const Signin = (props) => {
          const [email, setEmail] = useState('');
          const [pass, setPass] = useState('');
          
          const handleSubmit = (e) => {
              e.preventDefault();
              console.log(props);
              
          }
      
          return (
            <div className={style["container"]}>
            <div className={style["auth-form-container"]}>
            <h2>Login</h2>
            <form className={style["login-form"]} onSubmit={handleSubmit}>
                <label htmlFor={style["email"]}>Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor={style["password"]}>Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button type={style["submit"]}>Sign In</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('Register')}>Don't have an account? Register here.</button>
        </div>
        </div>
      );
    };

      export default Signin




      
       
      