import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from "./login.jsx";
import SigninPage from './signin.jsx';
import Home from './Home.jsx'
// import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} /> 
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/home" element={<Home/>} />
      </Routes>
    </Router>
   
    
  );
}

export default App;
