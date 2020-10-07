/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Paper } from "@material-ui/core";
import { useState } from "react";
import {
  root,
  TableRoot,
  tableTitle,
  title,
  Table,
  TableRow,
  TableContainer,
  titleTable,
} from "./styles";

function TopTable() {
  const [highest, setHighest] = useState(0);
  const [lowest, setLowest] = useState(0);

  return (
    <Paper css={root}>
      <div css={tableTitle}>
        <p css={title}>Top 5</p>
      </div>
      <TableContainer>
        <TableRoot>
          <p css={titleTable}>Highest avg age</p>
          <Table>
            {Array(5)
              .fill(1)
              .map((elem, index) => {
                return (
                  <TableRow
                    onClick={() => setHighest(index)}
                    selected={highest === index}
                  >
                    <p>Inter Milan</p>
                    <p>31.9</p>
                  </TableRow>
                );
              })}
          </Table>
        </TableRoot>
        <TableRoot>
          <p css={titleTable}>Lowestt avg age</p>
          <Table>
            {Array(5)
              .fill(1)
              .map((elem, index) => {
                return (
                  <TableRow
                    onClick={() => setLowest(index)}
                    selected={lowest === index}
                  >
                    <p>Inter Milan</p>
                    <p>31.9</p>
                  </TableRow>
                );
              })}
          </Table>
        </TableRoot>
      </TableContainer>
    </Paper>
  );
}

export default TopTable;
