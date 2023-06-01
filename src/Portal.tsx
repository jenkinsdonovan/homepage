import { Link } from 'react-router-dom'
import "./Portal.css"
import React, { useState } from 'react';

import { animated, useSpring } from '@react-spring/web'
import Avatar from '@mui/material/Avatar'
import { AvatarGroup, Tooltip } from '@mui/material';

import * as img from './thumbs';

const data = [
  {
    name: "donnie",
    path: img.donnie
  },
  {
    name: "skrillex",
    path: img.skrillex
  },
  {
    name: "flume",
    path: img.flume
  },
  {
    name: "fred again...",
    path: img.fredagain
  },
  {
    name: "odesza",
    path: img.odesza
  },
  {
    name: "aurora",
    path: img.aurora
  },
  {
    name: "doja cat",
    path: img.doja
  },
  {
    name: "flying lotus",
    path: img.flylo
  },
]

// TODO: scale things better
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

  console.log(data);

  return (
    <div>
      {/* logo */}
      <animated.div style={landerLogoStyles}>
        <img src={img.logo} className="logo" alt="React logo" style={{ cursor: "grab" }} onClick={() => setIsVisible(!isVisible)}/>
      </animated.div>

      {/* summary */}
      <animated.div style={landerSummaryStyles}>
        <h1>Space Hash Records</h1>
        <p className="subtitle">Pushing boundaries since 2023</p>
      </animated.div>

      {/* roster */}
      <animated.div style={{...rosterStyles, width: "100vw"}}>
        <AvatarGroup max={10} style={{ justifyContent: "center" }}>
          {data.slice(0,3).map(item => (
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