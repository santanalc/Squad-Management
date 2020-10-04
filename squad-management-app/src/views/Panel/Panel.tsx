/** @jsx jsx */
import { jsx } from "@emotion/core";
import VenturusLogo from "../../images/venturus-logo.svg";
import { Paper } from "@material-ui/core";
import TeamTable from "./components/TeamTable/TeamTable";
import {
  root,
  nav,
  leftBlock,
  logo,
  rigthBlock,
  container,
  leftArea,
  rightArea,
  paper,
} from "./styles";
import TopTable from "./components/TopTable/TopTable";
import InfoTable from "./components/InfoTable/InfoTable";

function Panel() {
  return (
    <div css={root}>
      <nav css={nav}>
        <span css={leftBlock}>
          <img alt="Logo" src={VenturusLogo} css={logo} />
          <p> Squad Management Tool</p>
        </span>
        <span css={rigthBlock}>
          <p>Jonh Doe</p>
          <img alt="Logo" src={VenturusLogo} css={logo} />
        </span>
      </nav>
      <div css={container}>
        <div css={leftArea}>
          <TeamTable />
        </div>
        <div css={rightArea}>
          <TopTable />
          <InfoTable />
        </div>
      </div>
    </div>
  );
}

export default Panel;
