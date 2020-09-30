import React from "react";
import { useStyles } from "./styles";
import VenturusLogo from "../../images/venturus-logo.svg";

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
    </div>
  );
}

export default Panel;
