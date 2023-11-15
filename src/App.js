import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from "./pages/Signup/signup.js"


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/signup/createAccount" element={<SignUp/>}></Route>
      </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
