import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.jsx';
import Footer from './components/Footer/Footer.jsx';
import Discover from './pages/Discover/Discover.jsx';
import Questions from './components/Footer/Questions.jsx';
import About from './components/Footer/About.jsx';
import MovieDetails from './components/MovieDetails.jsx';
import SignUp from './components/Navbar/SignUp.jsx';
import SignIn from './components/Navbar/SignIn.jsx';
import TermsOfUse from './components/Footer/TermsOfUse.jsx';
import PrivacyStatement from './components/Footer/PrivacyStatement.jsx';
import Contact from './components/Footer/Contact.jsx';
import Search from './components/Navbar/Search.jsx';
import SearchDetails from './components/Navbar/SearchDetails.jsx';
import { AuthContextProvider } from './context/AuthContext.jsx'; 
import MyAccount from './components/Navbar/MyAccount.jsx';
import ProtectedRoute from './components/Navbar/ProtectedRoute.jsx';



ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <AuthContextProvider>
  <Navbar />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/discover" element={<Discover/>} />
      <Route path="/questions" element={<Questions/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/privacy" element={<PrivacyStatement/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/termsofuse" element={<TermsOfUse/>} />
      <Route path="/movie/:id/movie" element={<MovieDetails/>} />
      <Route path="/signup" element={<SignUp/>} />
      <Route path="/signin" element={<SignIn/>} />
      <Route path="/search" element={<Search/>} />
      <Route path="/movies/:id" element={<SearchDetails />} />
      <Route path="/myaccount" element={<ProtectedRoute><MyAccount/></ProtectedRoute> } />
      
      
      
      
    </Routes>
    <Footer/>
    </AuthContextProvider>
    
  </BrowserRouter>
);