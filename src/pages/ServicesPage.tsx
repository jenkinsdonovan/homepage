import React from 'react';
import Header from "../components/Header/Header.tsx";
import {Box} from "@mui/material";

const AboutPage: React.FC = () => {
	return (
		<Box>
			<Header />
			<div>
				<h1>Services</h1>
				<p>Learn about the services Space Hash Records provide.</p>
			</div>
		</Box>
	);
};

export default AboutPage;