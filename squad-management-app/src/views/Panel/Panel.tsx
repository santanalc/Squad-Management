/** @jsx jsx */
import { jsx } from "@emotion/core";
import TeamTable from "./components/TeamTable/TeamTable";
import { root, container, leftArea, rightArea } from "./styles";
import TopTable from "./components/TopTable/TopTable";
import InfoTable from "./components/InfoTable/InfoTable";

function Panel() {
  return (
    <div css={root}>
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
