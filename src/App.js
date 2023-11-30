import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from "./pages/Signup/signup.js"
import Profile from './pages/Profile/profile';
import Login from './pages/Login/login';
import Dashboard from './pages/Dashboard/dashboard';
import Cards from './pages/Dashboard/Cards/Cards.js';
import CreateCard from './pages/Dashboard/CreateCard/CreateCard.js';
import ProfileCard from './components/ProfileCard.js';
import Card from './pages/Card/Card.js';
import Account from './pages/Dashboard/Account/Account.js';

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
        <Route path=':id/dashboard/account' element={<Account/>}/>
        <Route path=':id/cards' element={<ProfileCard/>}/>
        <Route path=':id/cards/:cardId' element={<Card/>}/>
      </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
