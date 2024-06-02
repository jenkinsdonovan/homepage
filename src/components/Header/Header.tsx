import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import CloseIcon from '@mui/icons-material/Close';
import styles from './Header.module.css';

const Header = () => {
	const [drawerOpen, setDrawerOpen] = useState(false);

	const toggleDrawer = (open: boolean) => () => {
		setDrawerOpen(open);
	};

	const menuItems = [
		{ text: 'Home', href: '/' },
		{ text: 'About', href: '/about' },
		{ text: 'Services', href: '/services' },
		{ text: 'Events', href: '/events' },
		{ text: 'Blog', href: '/blog' },
		{ text: 'Contact', href: '/contact' }
	];

	return (
		<>
			<AppBar position="static" className={styles.header}>
				<Toolbar>
					<IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" component="div" sx={{ flexGrow: 1, mt: 0.5 }}>
						Space Hash Records
					</Typography>
					<div className={styles.desktopMenu}>
						{menuItems.map((item) => (
							<Button key={item.text} color="inherit" href={item.href}>
								{item.text}
							</Button>
						))}
					</div>
				</Toolbar>
			</AppBar>
			<Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
				<div className={styles.drawerHeader}>
					<IconButton onClick={toggleDrawer(false)}>
						<CloseIcon />
					</IconButton>
				</div>
				<List>
					{menuItems.map((item) => (
						<ListItem key={item.text} component="a" href={item.href}>
							<ListItemText primary={item.text} />
						</ListItem>
					))}
				</List>
			</Drawer>
		</>
	);
};

export default Header;