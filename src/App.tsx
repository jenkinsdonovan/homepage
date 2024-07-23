/**
 * TODO: unique background effects on hover
 * TODO: card maximizes and flips onClick -> look at https://github.com/acidelia/react-flippy-material-ui
 * TODO: better keyboard nav
 */

import {Box, Card, Grid, Modal, Typography, Zoom} from "@mui/material";
import clsx from "clsx";
import "./App.css";
import {useEffect, useState} from "react";

function App() {
  // TODO: replace these strings with an enum
  const [active, setActive] = useState("");

  useEffect(() => {
    console.log(active);
  }, [active])

  return (
    <Box className={clsx("container center")}>
      <Grid container spacing={2}  sx={{width: "100vw", height: "70vh"}}>

        {/*EVENTs*/}
        <Grid item xs={6} display={"flex"} justifyContent={"right"}>
            <Card className={"item"} onClick={() => setActive("events")} tabIndex={0}>
              <Typography variant={"h5"} padding={"10px"}>Events</Typography>
            </Card>
        </Grid>

        {/*DEV*/}
        <Grid item xs={6} display={"flex"} justifyContent={"left"}>
            <Card className={"item"} onClick={() => setActive("development")} tabIndex={0}>
              <Typography variant={"h5"} padding={"10px"}>Development</Typography>
            </Card>
        </Grid>

        {/*ABOUT*/}
        <Grid item xs={6} display={"flex"} justifyContent={"right"}>
            <Card className={"item"} onClick={() => setActive("about")} tabIndex={0}>
              <Typography variant={"h5"} padding={"10px"}>About</Typography>
            </Card>
        </Grid>

        {/*CONTACT*/}
        <Grid item xs={6} display={"flex"} justifyContent={"left"}>
            <Card className={"item"} onClick={() => setActive("contact")} tabIndex={0}>
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
          <Card>
            <Typography variant={"h5"}>{ active }</Typography>
          </Card>
        </Zoom>
      </Modal>
    </Box>
  )
}

export default App
