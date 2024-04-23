import React from 'react';
import './register.scss';
import img from '../assets/register.png';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Register() {
  return (
    <div className='register'>
      <div className="left">
        <img src={img} alt="far-img" />
        <img className='plant' src="https://demos.themeselection.com/materio-mui-nextjs-admin-template/demo-1/images/illustrations/objects/tree-3.png" alt="far-img" />
      </div>

      <div className="right">

        <div className="form-container">
          <span className="head">
            Welcome to KrishiConnect!👋🏻
          </span>
          <span className='head2'>
            Make your app management easy and fun!
          </span>

          <form className="myform">
            <TextField className='inp-field' id="outlined-basic" label="Name" variant="outlined"/>
            <TextField className='inp-field' id="outlined-basic" label="Username" variant="outlined" />
            <TextField type= "email" className='inp-field' id="outlined-basic" label="Email" variant="outlined" />
            <TextField className='inp-field' id="outlined-basic" label="Phone" variant="outlined" />
            <TextField type='password' className='inp-field' id="outlined-basic" label="Password" variant="outlined" />
            <TextField type='password' className='inp-field' id="outlined-basic" label="Confirm Password" variant="outlined" />

            <Button variant="contained">
              Register
            </Button>
          </form>

          <div className="text">
            <p >Already have an account? 
              <span> Sign in instead</span>
            </p>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Register;
