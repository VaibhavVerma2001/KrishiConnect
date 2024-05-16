import React, { useState } from 'react';
import './App.scss'
// import Login from '../src/pages/Login';
import Navbar from './components/Navbar';
// import News from './pages/News';
import LoadingBar from 'react-top-loading-bar';
import Footer from './components/Footer';
import Register from './pages/Register';
import Login from './pages/Login';
import Weather from './components/Weather';
// import SingleProduct from './pages/SingleProduct';
import Home from './pages/Home';
import SecondaryNavbar from './components/SecondaryNavbar';


function App() {
  const [progress, setProgress] = useState(0);
  

  return (
    <div className='app-light'>
      <LoadingBar
        color='#f11946' height={3} transitionTime={300}
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />

      <Navbar />
      <SecondaryNavbar />

      <Home />

      {/* <Register /> */}

      {/* <Login /> */}

      {/* <News setProgress={setProgress} key="technology" country="in" category="health" /> */}

      {/* <SingleProduct /> */}

      {/* <Footer /> */}


      <Weather />

    </div>
  )
}

export default App;
