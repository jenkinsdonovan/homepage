import React from 'react';
import Header from "../components/Header/Header.tsx";
import {Box} from "@mui/material";

const ContactPage: React.FC = () => {
	return (
		<Box>
			<Header />

			<div>
				<h1>Contact Us</h1>
				<p>Get in touch with us for more information or inquiries at <a href= "mailto: spacehashes@gmail.com"> spacehashes@gmail.com </a></p>
			</div>
		</Box>
	);
};

export default ContactPage;