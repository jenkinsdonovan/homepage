/**
 * TODO: unique background effects on hover
 * TODO: card maximizes and flips onClick -> look at https://github.com/acidelia/react-flippy-material-ui
 * TODO: better keyboard nav
 */

import {Backdrop, Box, Card, ClickAwayListener, Grid, Grow, Modal, styled, Typography, Zoom} from "@mui/material";
import clsx from "clsx";
import "./App.css";
import {useEffect, useState} from "react";

function App() {
  // TODO: replace these strings with an enum
  const [active, setActive] = useState("");

  useEffect(() => {
    console.log(active);
  }, [active])

  const handleClickAway = (focus: string) => {
    if (active == focus) setActive("");
  }

  return (
    <Box className={clsx("container center")}>
      <Grid container spacing={2}  sx={{width: "100vw", height: "70vh"}}>

        {/*EVENTs*/}
        <Grid item className={ active == "events" ? "active" : ""} xs={6} display={"flex"} justifyContent={"right"}>
            <Card raised={active == "events"} onClick={() => setActive("events")} tabIndex={0}>
              <Typography variant={"h5"} padding={"10px"}>Events</Typography>
            </Card>
        </Grid>

        {/*DEV*/}
        <Grid item className={ active == "development" ? "active" : ""} xs={6} display={"flex"} justifyContent={"left"}>
            <Card raised={active == "development"} onClick={() => setActive("development")} tabIndex={0}>
              <Typography variant={"h5"} padding={"10px"}>Development</Typography>
            </Card>
        </Grid>

        {/*ABOUT*/}
        <Grid item className={ active == "about" ? "active": ""} xs={6} display={"flex"} justifyContent={"right"}>
            <Card raised={active == "about"} onClick={() => setActive("about")} tabIndex={0}>
              <Typography variant={"h5"} padding={"10px"}>About</Typography>
            </Card>
        </Grid>

        {/*CONTACT*/}
        <Grid item className={ active == "contact" ? "active" : ""} xs={6} display={"flex"} justifyContent={"left"}>
            <Card raised={active == "contact"} onClick={() => setActive("contact")} tabIndex={0}>
              <Typography variant={"h5"} padding={"10px"}>Contact</Typography>
            </Card>
        </Grid>
      </Grid>

      <Modal
        open={active !== ""}
        onClose={() => setActive("")}
        sx={{
          display:'flex',
          alignItems:'center',
          justifyContent:'center',
        }}
      >
        <Zoom in={active !== ""}>
          <Card width={"80vw"}>
            <Typography variant={"h5"}>{ active }</Typography>
          </Card>
        </Zoom>
      </Modal>
    </Box>
  )
}

export default App
