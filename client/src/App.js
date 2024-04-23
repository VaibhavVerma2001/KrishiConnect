import React, { useState } from 'react';
import './App.scss'
// import Login from '../src/pages/Login';
import Navbar2 from './components/Navbar2';
import News from './pages/News';
import LoadingBar from 'react-top-loading-bar';
import Footer from './components/Footer';
import Register from './pages/Register';
import Login from './pages/Login';
import Weather from './components/Weather';

function App() {
  const [progress, setProgress] = useState(0);
  

  return (
    <div className='app-light'>
      <LoadingBar
        color='#f11946' height={3} transitionTime={300}
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />

      <Navbar2 />

      {/* <Register /> */}

      {/* <Login /> */}

      {/* <News setProgress={setProgress} key="technology" country="in" category="health" /> */}

      {/* <Footer /> */}

      <Weather />

    </div>
  )
}

export default App;
