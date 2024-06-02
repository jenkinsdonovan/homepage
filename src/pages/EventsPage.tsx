import React from 'react';
import Header from "../components/Header/Header.tsx";
import {Box} from "@mui/material";

const EventsPage: React.FC = () => {
	return (
		<Box>
			<Header />
			<div>
				<h1>Upcoming Events</h1>
				<p>Stay updated on our latest events and raves.</p>
			</div>
		</Box>
	);
};

export default EventsPage;