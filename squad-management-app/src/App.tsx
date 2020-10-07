import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./theme/index";
import BaseRouter from "./routes/BaseRouter";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BaseRouter />
    </ThemeProvider>
  );
}

export default App;
