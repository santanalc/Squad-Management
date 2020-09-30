import { makeStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
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
}));
