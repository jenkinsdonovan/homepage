import React from 'react';
import Header from "../components/Header/Header.tsx";
import {Box} from "@mui/material";

const BlogPage: React.FC = () => {
	return (
		<Box>
			<Header />
			<div>
				<h1>Latest News</h1>
				<p>I made this thing in like 30 minutes lol gimmie a break.</p>
			</div>
		</Box>
	);
};

export default BlogPage;