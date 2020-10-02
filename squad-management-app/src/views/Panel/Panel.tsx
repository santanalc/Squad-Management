import React from "react";
import { useStyles } from "./styles";
import VenturusLogo from "../../images/venturus-logo.svg";
import { Paper, Grid } from "@material-ui/core";

function Panel() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <nav className={classes.nav}>
        <span className={classes.leftBlock}>
          <img alt="Logo" src={VenturusLogo} className={classes.logo} />
          <p> Squad Management Tool</p>
        </span>
        <span className={classes.rigthBlock}>
          <p>Jonh Doe</p>
          <img alt="Logo" src={VenturusLogo} className={classes.logo} />
        </span>
      </nav>
      <div className={classes.container}>
        <div className={classes.leftArea}>
          <Paper className={classes.paper}>CHHH</Paper>
        </div>
        <div className={classes.rightArea}>
          <Paper className={classes.paper}>AHH</Paper>
          <Paper className={classes.paper} style={{ marginBottom: "40px" }}>
            BHHH
          </Paper>
        </div>
      </div>
    </div>
  );
}

export default Panel;
