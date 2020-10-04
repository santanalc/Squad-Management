/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Paper } from "@material-ui/core";
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
                  <TableRow>
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
                  <TableRow>
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
