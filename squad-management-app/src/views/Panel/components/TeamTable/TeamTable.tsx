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
import { useEffect, useState } from "react";
import { url } from "../../../../util/url";

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

interface Player {
  id?: number;
  name: string;
  age: number;
  position: number;
  idTeam?: number;
}

interface Time {
  averageAge: number;
  description: string;
  formation: string;
  id: number;
  name: string;
  players: Player[];
  site: string;
  type: number;
}

function TeamTable() {
  const history = useHistory();
  const [sort, setSort] = useState({ tag: "name", flag: 1 });
  const [times, setTimes] = useState<Time[]>([]);

  async function deleteTeam(id: number) {
    try {
      await fetch(`${url}/team/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      let response = await fetch(`${url}/team`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      let responseObject = await response.json();

      setTimes(responseObject);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    (async () => {
      try {
        let response = await fetch(`${url}/team`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        let responseObject = await response.json();

        setTimes(responseObject);
        console.log(responseObject);
      } catch (err) {
        console.log(err);
      } finally {
      }
    })();
  }, []);

  useEffect(() => {
    if (sort.tag === "name") {
      const newTimes = times.sort((a, b) =>
        a.name > b.name ? sort.flag : b.name > a.name ? -sort.flag : 0
      );
      setTimes(newTimes);
    }
    if (sort.tag === "description") {
      const newTimes = times.sort((a, b) =>
        a.description > b.description
          ? sort.flag
          : b.description > a.description
          ? -sort.flag
          : 0
      );
      setTimes(newTimes);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sort]);

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
              onClick={() => setSort({ tag: "name", flag: -sort.flag })}
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
              onClick={() => setSort({ tag: "description", flag: -sort.flag })}
            >
              <MdUnfoldMore />
            </SortButton>
          </DescriptionControl>
        </div>
        {times.map((elem, index) => {
          return (
            <RowTable key={elem.id}>
              <p>{elem.name}</p>
              <DescriptionControl>
                <p>{elem.description}</p>
                <CellIcons>
                  <TooltipArrow title="Delete" placement="top-start" arrow>
                    <SortButton
                      style={{ y: 0, x: 0 }}
                      whileTap={{
                        y: 1,
                      }}
                      onClick={() => deleteTeam(elem.id)}
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
                      onClick={() => history.push(`/edit/${elem.id}`)}
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
