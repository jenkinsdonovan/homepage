import React from "react";
import {HashRouter as Router, Route, Routes} from "react-router-dom";
import Portal from "./Portal.tsx";
import Bio from "./Bio.tsx";

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Portal /> } />
				<Route path="/bio/:artist" element={<Bio /> } />
			</Routes>
		</Router>
	)
}

export default App;