import React from "react";
import ConstructionIcon from "@mui/icons-material/Construction";
import {Link, useParams} from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {Box, Grid} from "@mui/material";

const Bio = () => {
	// url parameter until I learn to pass props in better
	const { artist } = useParams();

	return (
		// also a lot of work just to center things
		<Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh" overflow="hidden">
			<Grid container alignItems="center" justifyContent="center" direction="column" position="relative">
				<Grid item xs={12}>
					<ConstructionIcon fontSize="large"/>
				</Grid>

				<Grid item xs={12}>
					<p className="subtitle">
						{artist}
					</p>
				</Grid>

				<Grid item xs={12}>
					<Link to="/"><ArrowBackIcon/></Link>
				</Grid>
			</Grid>
		</Box>
	)
}

export default Bio;