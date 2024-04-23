import React from 'react';
import './register.scss';
import img from '../assets/login.png';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Login() {
  return (
    <div className='register'>
      <div className="left">
        <img src={img} alt="far-img" />
        <img className='plant' src="https://demos.themeselection.com/materio-mui-nextjs-admin-template/demo-1/images/illustrations/objects/tree-2.png" alt="far-img" />

      </div>

      <div className="right">

        <div className="form-container">
          <span className="head-login">
            Welcome to KrishiConnect!👋🏻
          </span>
          <span className='head2-login'>
            Make your app management easy and fun!
          </span>

          <form className="myform-login">
            <TextField className='inp-field' id="outlined-basic" label="Username" variant="outlined" />
            <TextField type='password' className='inp-field' id="outlined-basic" label="Password" variant="outlined" />

            <Button variant="contained">
              Login
            </Button>
          </form>

          <div className="text">
            <p >New on our platform?
              <span> Create an account</span>
            </p>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Login;
