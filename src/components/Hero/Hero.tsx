import React, {useEffect, useState} from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button, Typography } from '@mui/material';
import styles from './Hero.module.css';
import {Link} from "react-router-dom";

interface Item {
	name: string;
	description: string;
	image: string;
	link: string;
}

const items: Item[] = [
	{
		name: "Welcome to Space Hash Records",
		description: "Your gateway to the best in music production, promotion, and innovation.",
		image: "/images/rave.webp",
		link: "/about"
	},
	{
		name: "Innovative Audio Plugins",
		description: "Creating tools that inspire creativity and efficiency in music production.",
		image: "/images/code.webp",
		link: "/services"
	},
	{
		name: "Unforgettable Events",
		description: "Join us for the most exciting raves and music events.",
		image: "/images/cool.webp",
		link: "/contact"
	}
];

interface ItemProps {
	item: Item;
}

const Hero: React.FC = () => {
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
		}, 5000); // Change slide every 5 seconds
		return () => clearInterval(interval);
	}, []);

	return (
		<Carousel
			animation="slide" /* Add this line to enable slide effect */
			index={currentIndex}
			navButtonsAlwaysInvisible /* Hide navigation buttons if not needed */
			autoPlay={false} /* Disable autoPlay since we handle it manually */
		>
			{items.map((item, index) => (
				<Item key={index} item={item} />
			))}
		</Carousel>
	);
};

const Item: React.FC<ItemProps> = ({ item }) => {
	return (
		<Paper className={styles.heroItem} style={{ backgroundImage: `url(${item.image})` }}>
			<Typography variant="h2" component="h2">
				{item.name}
			</Typography>
			<Typography variant="h5" component="h5">
				{item.description}
			</Typography>
			<Button variant="contained" color="primary" component={Link} to={item.link}>
				Learn More
			</Button>
		</Paper>
	);
};

export default Hero;