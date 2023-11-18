import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from "./pages/Signup/signup.js"
import Profile from './pages/Profile/profile.js';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/signup/createAccount" element={<SignUp/>}></Route>
        <Route path='/profile' element={<Profile/>}></Route>
      </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
