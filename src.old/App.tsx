import { Routes, Route, HashRouter as Router} from "react-router-dom";

import Portal from "./Portal";
import Bio from "./Bio";
import React from "react";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Portal /> } />
        <Route path="/bio/:artist" element={<Bio /> } />
      </Routes>
    </Router>
  )
}

export default App
