/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Paper } from "@material-ui/core";
import {
  AddButton,
  CellIcons,
  DescriptionControl,
  gridRow,
  NameControl,
  root,
  RowTable,
  SortButton,
  Table,
  tableTitle,
  title,
} from "./styles";
import { MdAdd, MdUnfoldMore, MdEdit, MdShare, MdDelete } from "react-icons/md";
import { Theme, withStyles } from "@material-ui/core";
import Tooltip from "@material-ui/core/Tooltip";
import { useHistory } from "react-router-dom";

const TooltipArrow = withStyles((theme: Theme) => ({
  arrow: {
    color: "#2B2B2B",
  },
  tooltip: {
    backgroundColor: "#2B2B2B",
    color: "#ffffff",
    fontWeight: "bold",
    boxShadow: theme.shadows[1],
    padding: theme.spacing(1),
    fontSize: "14px",
  },
}))(Tooltip);

function TeamTable() {
  const history = useHistory();

  return (
    <Paper css={root}>
      <div css={tableTitle}>
        <p css={title}>My Teams</p>
        <AddButton
          style={{ y: 0, x: 0 }}
          whileTap={{
            y: 1,
          }}
          onClick={() => history.push("/add")}
        >
          <MdAdd fontSize={25} color={"white"} />
        </AddButton>
      </div>

      <Table>
        <div css={gridRow}>
          <NameControl>
            <p>Name</p>
            <SortButton
              style={{ y: 0, x: 0 }}
              whileTap={{
                y: 1,
              }}
              onClick={() => console.log("as")}
            >
              <MdUnfoldMore />
            </SortButton>
          </NameControl>
          <DescriptionControl>
            <p>Description</p>
            <SortButton
              style={{ y: 0, x: 0 }}
              whileTap={{
                y: 1,
              }}
              onClick={() => console.log("as")}
            >
              <MdUnfoldMore />
            </SortButton>
          </DescriptionControl>
        </div>
        {Array(6)
          .fill(1)
          .map((elem, index) => {
            return (
              <RowTable>
                <p>Barcelona</p>
                <DescriptionControl>
                  <p>Barcellona Squad</p>
                  <CellIcons>
                    <TooltipArrow title="Delete" placement="top-start" arrow>
                      <SortButton
                        style={{ y: 0, x: 0 }}
                        whileTap={{
                          y: 1,
                        }}
                        onClick={() => console.log("Delete")}
                      >
                        <MdDelete />
                      </SortButton>
                    </TooltipArrow>
                    <TooltipArrow title="Share" placement="top-start" arrow>
                      <SortButton
                        style={{ y: 0, x: 0 }}
                        whileTap={{
                          y: 1,
                        }}
                        onClick={() => console.log("Share")}
                      >
                        <MdShare />
                      </SortButton>
                    </TooltipArrow>
                    <TooltipArrow title="Edit" placement="top-start" arrow>
                      <SortButton
                        style={{ y: 0, x: 0 }}
                        whileTap={{
                          y: 1,
                        }}
                        onClick={() => history.push(`/edit/${index}`)}
                      >
                        <MdEdit />
                      </SortButton>
                    </TooltipArrow>
                  </CellIcons>
                </DescriptionControl>
              </RowTable>
            );
          })}
      </Table>
    </Paper>
  );
}

export default TeamTable;
