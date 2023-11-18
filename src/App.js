import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from "./pages/Signup/signup.js"
import Profile from './pages/Profile/profile';
import Login from './pages/Login/login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignUp/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/profile/:id" element={<Profile />} />
      </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
