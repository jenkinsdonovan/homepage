import ConstructionIcon from '@mui/icons-material/Construction';
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function Bio() {
  const { artist } = useParams();

  return (
    <>
      <ConstructionIcon fontSize="large"/>
      <p className="subtitle">
        {artist}
      </p>
      <Link to="/"><ArrowBackIcon/></Link>
    </>
  )
}

export default Bio;