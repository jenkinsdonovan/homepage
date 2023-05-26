import { Link } from 'react-router-dom'
import "./Portal.css"
import React, { useState } from 'react';

import { animated, useSpring } from '@react-spring/web'
import Avatar from '@mui/material/Avatar'
import { AvatarGroup, Tooltip } from '@mui/material';

import logo from './assets/logo.svg'
import donnie from './assets/donnie.jpeg'

const data = [
  {
    name: "donnie",
    path: donnie
  },
  {
    name: "skrillex",
    path: "/roster/skrillex.jpeg"
  },
  {
    name: "flume",
    path: "/roster/flume.jpeg"
  },
  {
    name: "fred again...",
    path: "/roster/fredagain.jpeg"
  },
  {
    name: "odesza",
    path: "/roster/odesza.jpeg"
  },
  {
    name: "aurora",
    path: "/roster/aurora.jpeg"
  },
  {
    name: "doja cat",
    path: "/roster/dojacat.jpeg"
  },
  {
    name: "flying lotus",
    path: "/roster/flylo.webp"
  },
]

function Portal() {
  const [isVisible, setIsVisible] = useState(true);

  // fade effect for words
  const landerSummaryStyles = useSpring({
    opacity: isVisible ? 1 : .1,
    y: isVisible ? 0 : 24,
  })

  // fade effect for logo
  const landerLogoStyles = useSpring({
    y: isVisible ? 0 : 24,
  })

  // fade effect for roster
  const rosterStyles = useSpring({
    opacity: !isVisible ? 1 : 0,
    y: !isVisible ? 0 : 24,
  })

  return (
    <div>
      {/* logo */}
      <animated.div style={landerLogoStyles}>
        <img src={logo} className="logo" alt="React logo" style={{ cursor: "grab" }} onClick={() => setIsVisible(!isVisible)}/>
      </animated.div>

      {/* summary */}
      <animated.div style={landerSummaryStyles}>
        <h1>Space Hash Records</h1>
        <p className="subtitle">Pushing boundaries since 2023</p>
      </animated.div>

      {/* roster */}
      <animated.div style={{...rosterStyles, width: "1500px"}}>
        <AvatarGroup max={10} style={{ justifyContent: "center" }}>
          {data.map(item => (
            <Tooltip title={isVisible ? "" : item.name} key={item.name}>
              <Avatar 
                alt={item.name}
                src={item.path} 
                sx={{ width: 100, height: 100 }}
              />
            </Tooltip>
          ))}
        </AvatarGroup>
      </animated.div>

      
    </div>
  )
}

export default Portal;