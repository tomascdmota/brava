import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv"
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";

const app = express();
app.use(cors());
app.use(cookieParser())
dotenv.config();




const port = 3001;

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get("*", (req, res) => {
    console.log("running");
})
//post method to generate JWT Token



const generateAccesToken = (username) => {
    let jwtSecretKey = process.env.TOKEN_SECRET; // Adicionar este merda
    return jwt.sign(username, jwtSecretKey, {expiresIn:'3600s'});
}

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if(token == null) return res.sendStatus(401);

    jwt.verify(token, process.env.TOKEN_SECRET, (req,res) => {
        console.log(err);
        if(err) return res.sendStatus(403);
        req.user = user;
        next()
    })
}

app.get("/profile", (req, res) => {

})

app.post("/signup/createAccount", (req, res) => {
    res.redirect(307, "");
   const token = generateAccesToken({username: req.body.name});
   res.json(token)
})



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})