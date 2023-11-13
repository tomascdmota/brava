import { Link } from "react-router-dom";
import "./login.css"


function Login () {
return(
    
    <div>
        <Link to="/auth/login"></Link>
        <div class="background"></div>
            <div class="card">
                <img class="logo" src="https://res.cloudinary.com/dnho57ne8/image/upload/v1699913993/brava_fqk4h4.png" />
                <h2>CREATE AN ACCOUNT TO GET STARTED!</h2>
                    <form class="form">
                        <input type="text" placeholder="Name" />
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <input type="password" placeholder="Verify Password" />
                        <button type="submit">SIGN UP</button>
                    </form>
                    <footer>
                        Existing users, sign in
                        <a href="#"> here</a>
                    </footer>
            </div>
    </div>
)   
}
export default Login;