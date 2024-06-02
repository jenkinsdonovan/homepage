import React from 'react';
import {Box} from "@mui/material";
import Header from "../components/Header/Header.tsx";
import Hero from "../components/Hero/Hero.tsx";

const HomePage: React.FC = () => {
	return (
		<Box sx={{ overflow: "hidden" }}>
			<Header />

			<Hero />
		</Box>
	);
};

export default HomePage;