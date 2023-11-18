import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
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
                    const {userId} = res.data;
                    navigate(`/profile/${userId}`);
                }).catch((err) =>{
                    console.log("AXios error", err);
                })
            } catch(error){
                console.log("EERRORRR")
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    if (error.response.status === 409) {
                        console.log("um user com este username ja existe")
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
    <div>
        <Link to="/login"></Link>
        <div className="background"></div>
            <div className="card">
                <img className="logo" src="https://res.cloudinary.com/dnho57ne8/image/upload/v1699913993/brava_fqk4h4.png" />
                <h2>CREATE AN ACCOUNT TO GET STARTED!</h2>
                    <form className="form" onSubmit={handleSubmit}>
                        <input type="email"placeholder="Email"  name="email" id="email" onChange={e => setEmail(e.target.value)} value={email} />
                        <input type="password" placeholder="Password" name="password" id="password" onChange={e => setPassword(e.target.value)} value={password} />
                        <button type="submit" >SIGN UP</button>
                    </form>
                    <footer>
                        Existing users, sign in
                        <button onClick={()=> navigate("/signup")}> here</button>
                    </footer>
            </div>
    </div>
  )
}
