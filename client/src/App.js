import React, { useState } from 'react';
import './App.scss';
import Navbar from './components/Navbar';
import News from './pages/News';
import LoadingBar from 'react-top-loading-bar';
import Footer from './components/Footer';
import Register from './pages/Register';
import Login from './pages/Login';
import Weather from './components/Weather';
import SingleProduct from './pages/SingleProduct';
import Home from './pages/Home';
import SecondaryNavbar from './components/SecondaryNavbar';
import { useContext } from 'react';
import UserContext from './context/UserContext';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";



function App() {
  const context = useContext(UserContext);
  const { user, setProgress, progress } = context;

  return (

    <div>
      <Router>
        <LoadingBar
          color='#4DFF01' height={3} transitionTime={300}
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
        />
        <Navbar />
        <SecondaryNavbar />
        <Routes>
          {/* <Route path="/" element={user ? <Home /> : <Navigate to='/login' />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/login" element={!user ? <Login /> : <Navigate to='/' />} />
          <Route path="/register" element={!user ? <Register /> : <Navigate to='/' />} />
          <Route path="/getproduct/:id" element={<SingleProduct />} />
        </Routes>

        <Footer />
        <Weather/>
      </Router>
    </div>
  )
}

export default App;
