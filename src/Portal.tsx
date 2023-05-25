import { Link } from 'react-router-dom'
import logo from './assets/logo.svg'
import "./Portal.css"
import React, { useState } from 'react';

import { animated, useSpring } from '@react-spring/web'

// TODO: display who is signed to the label as bubbles when they click on the logo
function Portal() {
  const [isVisible, setIsVisible] = useState(true);

  const styles = useSpring({
    opacity: isVisible ? 1 : .1,
    y: isVisible ? 0 : 24,
  })

  return (
    <div>
      <animated.div style={styles}>
        <img src={logo} className="logo" alt="React logo" style={{ cursor: "grab" }} onClick={() => setIsVisible(!isVisible)}/>
        <h1>Space Hash Records</h1>
        <p className="subtitle">Pushing boundaries since 2023</p>
      </animated.div>
    </div>
  )
}

export default Portal;