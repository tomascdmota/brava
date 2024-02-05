import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const SignUp = lazy(() => import('./pages/Signup/signup.js'));
const Profile = lazy(() => import('./pages/Profile/profile'));
const Login = lazy(() => import('./pages/Login/login'));
const Dashboard = lazy(() => import('./pages/Dashboard/dashboard'));
const Cards = lazy(() => import('./pages/Dashboard/Cards/Cards.js'));
const CreateCard = lazy(() => import('./pages/Dashboard/CreateCard/CreateCard.js'));
const ProfileCard = lazy(() => import('./components/ProfileCard.js'));
const Card = lazy(() => import('./pages/Card/Card.js'));
const Account = lazy(() => import('./pages/Dashboard/Account/Account.js'));

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta http-equiv="Cache-Control" content="public, max-age=31536000" />
      </Helmet>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route
              path="/"
              element={<Navigate to="/login" replace />}
            />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/:id/profile" element={<Profile />} />
            <Route path="/:id/dashboard" element={<Dashboard />} />
            <Route path="/:id/dashboard/overview" element={<Dashboard />} />
            <Route path="/:id/dashboard/cards" element={<Cards />} />
            <Route path="/:id/dashboard/createcard" element={<CreateCard />} />
            <Route path="/:id/dashboard/account" element={<Account />} />
            <Route path="/:id/cards" element={<ProfileCard />} />
            <Route path="/:id/cards/:cardId" element={<Card />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
