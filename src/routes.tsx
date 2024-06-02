import React from 'react';
import { Route, Routes as BrowserRoutes} from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import EventsPage from './pages/EventsPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';

const Routes = () => {
	return (
		<BrowserRoutes>
			<Route path="/" element={<HomePage/>} />
			<Route path="/about" element={<AboutPage/>} />
			<Route path="/services" element={<ServicesPage/>} />
			<Route path="/events" element={<EventsPage/>} />
			<Route path="/blog" element={<BlogPage/>} />
			<Route path="/contact" element={<ContactPage/>} />
		</BrowserRoutes>
	);
};

export default Routes;