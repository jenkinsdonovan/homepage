/**
 * First draft of the site to get the design down.
 *
 * TODO: handle roster and thumbnails better
 */

import React, { useState} from "react";
import {AvatarGroup, Box, Grid, Slide, Tooltip, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import Avatar from "@mui/material/Avatar";

import logo from "../assets/logo.svg"

import donnie from "../assets/donnie.jpeg"
import skrillex from "../assets/skrillex.jpeg"
import flume from "../assets/flume.jpeg"
import fredagain from "../assets/fredagain.jpeg"
import odesza from "../assets/odesza.jpeg"
import aurora from "../assets/aurora.jpeg"
import doja from "../assets/dojacat.jpeg"

const data = [
	{
		name: "Donnie",
		bio: "Donnie's bio",
		path: donnie
	},
	{
		name: "Skrillex",
		bio: "Skrillex's bio",
		path: skrillex
	},
	{
		name: "Flume",
		bio: "Flume's bio",
		path: flume
	},
	{
		name: "fred again...",
		bio: "Fred Again's bio",
		path: fredagain
	},
	{
		name: "Odesza",
		bio: "Odesza's bio",
		path: odesza
	},
	{
		name: "Aurora",
		bio: "Aurora's bio",
		path: aurora
	},
	{
		name: "Doja Cat",
		bio: "Doja Cat's bio",
		path: doja
	},
]

const Portal = () => {
	const [rosterVisible, setRosterVisible] = useState(false);

	// gets an entire roster as an array of avatargroups
	const getRoster = () => {
		let items: JSX.Element[] = [];

		// get a group of 5
		for(let i = 0; i < (data.length % 3) + 1; i++) {
			items.push(getGroup(3 * i));
		}

		return items;
	}

	// get at most 5 roster members starting from an index
	const getGroup = (start: number) => {
		return (
			<AvatarGroup max={10} style={{ justifyContent: "center"}} key={"group-" + start}>
				{data.slice(start,start + 3).map((item) => (
					<Tooltip title={rosterVisible ? "" : item.name} key={item.name}>
						<Link to={"/bio/" + item.name}>
							<Avatar alt={item.name} src={item.path} sx={{ width: 100, height: 100, cursor: "pointer" }}/>
						</Link>
					</Tooltip>
				))}
			</AvatarGroup>
		)
	}

	return (
		// TODO: A lot of effort just to center lol
		<Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh" overflow="hidden">
			<Grid container alignItems="center" justifyContent="center" direction="column" position="relative">
				{/*Logo*/}
				<Grid item xs={12} alignItems="center">
					<img src={logo} className="logo" alt="logo" style={{ cursor: "grab", height: "200px" }} onClick={() => setRosterVisible(!rosterVisible)}/>
				</Grid>

				{/*Heading*/}
				<Grid item xs={12}>
					<Typography variant="h1">Space Hash</Typography>
				</Grid>

				{/*Subheading*/}
				<Grid item xs={12}>
					<Typography variant="h5">Pushing boundaries since 2024</Typography>
				</Grid>

				{/*Roster*/}
				<Slide direction="up" in={rosterVisible}>
					<Box marginTop="20px">
					{getRoster()}
					</Box>
				</Slide>
			</Grid>
		</Box>
	)
}

export default Portal;