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
const TermsAndConditions = lazy(() => import("./pages/TermsAndConditions/TermsAndConditions.js"));

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta http-equiv="Cache-Control" content="public, max-age=31536000" />
      </Helmet>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
        <Routes>
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<Login />} />
              <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
  
            {/* Nested routes for user-specific dashboard */}
            <Route path="/:id">
              <Route index element={<Profile />} />
              <Route path="profile" element={<Profile />} />
              <Route path="dashboard">
                <Route index element={<Dashboard />} />
                <Route path=":tab" element={<Dashboard />} />
                <Route path="cards" element={<Cards />} />
                <Route path="createcard" element={<CreateCard />} />
                <Route path="account" element={<Account />} />
              </Route>
              <Route path="cards" element={<ProfileCard />} />
              <Route path="cards/:cardId" element={<Card />} />
            </Route>
          </Routes>

        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
