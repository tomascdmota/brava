import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from "./pages/Signup/signup.js"
import Profile from './pages/Profile/profile';
import Login from './pages/Login/login';
import Dashboard from './pages/Dashboard/dashboard';
import Cards from './pages/Dashboard/Cards/Cards.js';
import CreateCard from './pages/Dashboard/CreateCard/CreateCard.js';
import ProfileCard from './components/ProfileCard.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignUp/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/:id/profile" element={<Profile />} />
        <Route path='/:id/dashboard' element={<Dashboard/>}/>
        <Route path='/:id/dashboard/overview' element={<Dashboard/>}/>
        <Route path='/:id/dashboard/cards' element={<Cards/>}/>
        <Route path=':id/dashboard/createcard' element={<CreateCard/>}/>
        <Route path=':id/cards' element={<ProfileCard/>}/>
      </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
