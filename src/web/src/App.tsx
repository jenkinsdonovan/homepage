import {
  //BrowserRouter as Router,
  Routes,
  Route,
  HashRouter as Router,
} from "react-router-dom";

import Portal from "./Portal";
import Landing from "./Landing";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Portal /> } />
        <Route path="/landing" element={<Landing /> } />
      </Routes>
    </Router>
  )
}

export default App
