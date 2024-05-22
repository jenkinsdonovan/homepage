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

const data = [
	{
		name: "Donnie",
		bio: "Donnie's bio",
		path: donnie
	}
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
					<Typography variant="h2">Space Hash</Typography>
				</Grid>

				{/*Subheading*/}
				<Grid item xs={12}>
					<Typography variant="subtitle1">Pushing boundaries since 2024</Typography>
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