import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import "./login.css"

export default function Login() {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    const handleSubmit = async(e) => {
        e.preventDefault();
        
        
        const email = e.target.elements.email ? e.target.email.value : "";
        const password = e.target.elements.password ? e.target.password.value: "";
       
        if(email.trim() ==="" || password.trim() === ""){
            alert("Preencha todos os campos por favor");
            return;
        } else {
            try{
                axios.post("http://localhost:3306/api/login", {
                    email: email,
                    password: password
                }).then((res)=> {
                    console.log("Server response:", res.data);
                    const { user, token } = res.data; // Destructure user and token from the response
                    const { id: userId } = user;
                    Cookies.set("Session_Token", token, {
                        secure: false,  // Set to true in production (requires HTTPS)
                        httpOnly: false, // Set to true in production for added security
                        expires: 30,    // expires in 30 days
                        sameSite: "None",
                      });
              
                    navigate(`/profile/${userId}`);
                }).catch((err) =>{
                    console.log("Axios error", err);
                })
            } catch(error){
                console.log("EERRORRR")
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    if (error.response.status === 409) {
                        console.log("um user com este email não existe")
                    } else {
                      console.log("Erro de servidor. Tente novamente mais tarde.");
                    }
                  } else if (error.request) {
                    // The request was made but no response was received
                    console.log("Sem resposta do servidor. Tente novamente mais tarde.");
                  } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log("Erro na requisição. Tente novamente mais tarde.");
                  }
            }
        }
    }

  return (
    <div className='login-container'>
        <Link to="/login"></Link>
        <h1 className="welcome">Bem vindo à Brava</h1>
            <div className="card">
                <img className="logo" src="https://res.cloudinary.com/dnho57ne8/image/upload/v1699913993/brava_fqk4h4.png" />
                <h2>Entre para gerir a sua conta </h2>
                    <form className="form" onSubmit={handleSubmit}>
                        <input type="email"placeholder="Email"  name="email" id="email" onChange={e => setEmail(e.target.value)} value={email} />
                        <input type="password" placeholder="Password" name="password" id="password" onChange={e => setPassword(e.target.value)} value={password} />
                        <button type="submit" >SIGN UP</button>
                        <p className="existing-users-text">Don't have an account yet?</p>
                        <a onClick={()=> navigate("/signup")}> Click me!</a>
                    </form>
                   
            </div>
    </div>
  )
}
