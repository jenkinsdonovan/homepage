import { Link } from 'react-router-dom'
import logo from './assets/logo.svg'
import "./Portal.css"
import React from 'react';

function Portal() {
  return (
    <>
      <Link to="/landing">
        <img src={logo} className="logo" alt="React logo" />
      </Link>
      <h1>Space Hash Records</h1>
      <p className="subtitle">
        Pushing boundaries since 2023
      </p>
    </>
  )
}

export default Portal;