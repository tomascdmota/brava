import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import "./signup.css"


function Signup () {

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword]= useState();
    const [passwordVerify, setPasswordVerify] = useState();
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async(e) => {
        e.preventDefault(); //prevents page from refreshing after form submition

        if(!e.target || !e.target.elements) {
            console.log('Form or elements not found');
            return;
        }


        // Attempt at getting form elems. Providing default values for safety.
        const name = e.target.elements.name ? e.target.elements.name.value : '';
        const email = e.target.elements.email ? e.target.elements.email.value : '';
        const password = e.target.elements.password ? e.target.elements.password.value : "";
        const passwordVerify = e.target.elements.passwordVerify ? e.target.elements.passwordVerify.value : "";


        if(name.trim() === "" || email.trim() === "" || password.trim() === "" || passwordVerify.trim() === ""){
            alert("Preencha todos os campos, por favor!");
            return;
        } 
        else if(password.trim() !== passwordVerify.trim() ){
            alert("As palavras-passe têm de ser iguais");
            return;
        }
        else {
            try{
            axios.post("http://localhost:3306/api/sign-up", {
                username: name,
                email: email,
                password: password,
                passwordVerify: passwordVerify
            }).then((res) => {
                const {userId} = res.data;
                document.cookie =  `Session_Token= ${res.data}; Secure; max-age=max-age-in-seconds;samesite`;
                // TODO mudar route para /id/dashboard
            
                navigate(`/profile/${userId}`);
            }).catch((err) => {
                console.log("AXIOS error", err);
            })
        } catch (error){
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                if (error.response.status === 409) {
                    console.log("um user com este username ja existe")
                  setError("Um utilizador com este email já existe.");
                } else {
                  setError("Erro de servidor. Tente novamente mais tarde.");
                }
              } else if (error.request) {
                // The request was made but no response was received
                setError("Sem resposta do servidor. Tente novamente mais tarde.");
              } else {
                // Something happened in setting up the request that triggered an Error
                setError("Erro na requisição. Tente novamente mais tarde.");
              }
        }
        }
    }
    
return(
    
    <div>
        <Link to="/signup"></Link>
        <div className="background"></div>
            <div className="card">
                <img className="logo" src="https://res.cloudinary.com/dnho57ne8/image/upload/v1699913993/brava_fqk4h4.png" />
                <h2>CREATE AN ACCOUNT TO GET STARTED!</h2>
                    <form className="form" onSubmit={handleSubmit}>
                        <input type="text" placeholder="Name" name="name" id="name" onChange={e => setName(e.target.value)} value={name}/>
                        <input type="email"placeholder="Email"  name="email" id="email" onChange={e => setEmail(e.target.value)} value={email} />
                        <input type="password" placeholder="Password" name="password" id="password" onChange={e => setPassword(e.target.value)} value={password} />
                        <input type="password" placeholder="Verificar Password" name="passwordVerify" id="passworVerify" onChange={e => setPasswordVerify(e.target.value)} value={passwordVerify} />
                        <button type="submit">SIGN UP</button>
                    </form>
                    <footer>
                        Existing users, sign in
                        <button onClick={()=> navigate("/login")}> here</button>
                    </footer>
            </div>
    </div>
)   
}
export default Signup;