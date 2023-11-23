import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from "./pages/Signup/signup.js"
import Profile from './pages/Profile/profile';
import Login from './pages/Login/login';
import Dashboard from './pages/Dashboard/dashboard';
import Cards from './pages/Dashboard/Cards/Cards.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignUp/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/profile/:id" element={<Profile />} />
        <Route path='/dashboard/:id' element={<Dashboard/>}/>
        <Route path='/dashboard/cards/:id' element={<Cards/>}/>
      </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
