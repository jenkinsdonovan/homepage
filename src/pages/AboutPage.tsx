import React from 'react';
import Header from "../components/Header/Header.tsx";
import {Box} from "@mui/material";

const AboutPage: React.FC = () => {
	return (
		<Box>
			<Header />
			<div>
				<h1>About Space Hash Records</h1>
				<p>Learn more about our mission, vision, and the team behind Space Hash Records.</p>
			</div>
		</Box>
	);
};

export default AboutPage;