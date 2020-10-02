import { makeStyles, Theme } from "@material-ui/core/styles";
import { Height } from "@material-ui/icons";

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: "#F7F3F7",
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    overflowX: "hidden",
  },
  nav: {
    position: "fixed",
    top: "0",
    left: "0",
    height: "50px",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "linear-gradient(45deg, #BF0E4F 30%, #8A206F 90%)",
  },
  logo: {
    height: "40px",
    width: "40px",
  },
  leftBlock: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    width: "250px",
    marginLeft: theme.spacing(4),
  },
  rigthBlock: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    width: "150px",
    marginRight: theme.spacing(2),
  },
  container: {
    display: "flex",
    width: "90%",
    maxWidth: "90%",
    height: "100%",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    margin: "50px 0px 40px 0px",
  },
  paper: {
    border: "30px",
    width: "100%",
    height: "100%",
  },

  leftArea: {
    width: "100%",
    height: "100%",
    flex: "1 1 300px",
    margin: "20px",
  },
  rightArea: {
    width: "100%",
    height: "100%",
    flex: "1 1 300px",
    margin: "20px",
    display: "grid",
    gridTemplateRows: "1fr 1fr",
    gridRowGap: "40px",
  },
}));
