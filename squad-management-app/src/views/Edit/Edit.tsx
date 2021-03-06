/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import {
  Checkbox,
  Chip,
  FormControlLabel,
  Paper,
  TextField,
} from "@material-ui/core";
import { useEffect, useState } from "react";
import StyledInput, {
  titlerStyle,
  upperTitleState,
} from "../../components/StyledInput";
import { tableTitle, title } from "../Panel/components/TeamTable/styles";
import {
  EditRow,
  flexColumn,
  infoText,
  paperRoot,
  editContainer,
} from "./styles";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles } from "@material-ui/styles";
import { motion, TargetAndTransition } from "framer-motion";
import { TeamContainer } from "../../components/Draggle/TeamContainer";
import { useParams, useHistory } from "react-router-dom";
import { url } from "../../util/url";

export interface DustbinState {
  id: number;
  accepts: string[];
  lastDroppedItem: any;
}

export interface BoxState {
  name: string;
  nationality: string;
  age: number;
  type: string;
}

interface ParamTypes {
  id: string;
}

export let initialDustibins = [
  { id: 1, accepts: ["player"], lastDroppedItem: null },
  { id: 2, accepts: ["player"], lastDroppedItem: null },
  { id: 3, accepts: ["player"], lastDroppedItem: null },
  { id: 4, accepts: ["player"], lastDroppedItem: null },
  { id: 5, accepts: ["player"], lastDroppedItem: null },
  { id: 6, accepts: ["player"], lastDroppedItem: null },
  { id: 7, accepts: ["player"], lastDroppedItem: null },
  { id: 8, accepts: ["player"], lastDroppedItem: null },
  { id: 9, accepts: ["player"], lastDroppedItem: null },
  { id: 10, accepts: ["player"], lastDroppedItem: null },
  { id: 11, accepts: ["player"], lastDroppedItem: null },
];

export const formationOptions = [
  { value: 0, name: "3 - 4 - 4" },
  { value: 1, name: "3 - 2 - 2 - 3" },
  { value: 2, name: "3 - 2 - 3 - 1" },
  { value: 3, name: "3 - 4 - 3" },
  { value: 4, name: "3 - 5 - 2" },
  { value: 5, name: "4 - 2 - 3 - 1" },
  { value: 6, name: "4 - 3 - 1 - 1" },
  { value: 7, name: "4 - 3 - 2" },
  { value: 8, name: "4 - 4 - 2" },
  { value: 9, name: "4 - 5 - 1" },
  { value: 10, name: "5 - 4 - 1" },
];

export const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    minWidth: "0%",
  },
}));

const upperTitleTag: TargetAndTransition = {
  y: -45,
  scale: 0.8,
  opacity: 1,
};

function urlRegex(site: string) {
  let expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
  let regex = new RegExp(expression);

  if (site.match(regex)) {
    return true;
  } else {
    return false;
  }
}

function Edit() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [site, setSite] = useState("");
  const [dustbins, setDustbins] = useState<DustbinState[]>([]);
  const [boxes, setBoxes] = useState<BoxState[]>([]);
  const [droppedBoxNames, setDroppedBoxNames] = useState<string[]>([]);
  const [teamType, setTeamType] = useState(0);
  const [keywords, setKeywords] = useState<any>();
  const [formation, setFormation] = useState<{
    value: any;
    name: string;
  }>({ value: 0, name: "3 - 4 - 3" });
  const classes = useStyles();
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  const { id } = useParams<ParamTypes>();

  async function handleSubmit() {
    if (!description.length) {
      alert("Invalid Description");
      return;
    }

    if (!name.length) {
      alert("Invalid Name");
      return;
    }

    if (!site.length || !urlRegex(site)) {
      alert("Invalid Site");
      return;
    }

    let dustibinsError = false;

    const players = dustbins.map((elem) => {
      if (!elem.lastDroppedItem) {
        dustibinsError = true;
      }
      return {
        name: elem.lastDroppedItem?.name,
        age: elem.lastDroppedItem?.age,
        position: elem.id,
      };
    });

    console.log("a", dustibinsError);
    if (dustibinsError) {
      alert("Invalid Formation with players");
      return;
    }

    let data = null;

    if (id)
      data = {
        team: {
          name,
          description,
          site,
          type: teamType,
          formation: formation.name,
          id: parseInt(id),
        },
        players,
      };
    else
      data = {
        team: {
          name,
          description,
          site,
          type: teamType,
          formation: formation.name,
        },
        players,
      };

    try {
      console.log("data", data);
      await fetch(`${url}/team`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      history.push("/");
    } catch (err) {
      console.log(err);
    } finally {
    }
  }

  useEffect(() => {
    if (id)
      (async () => {
        try {
          let response = await fetch(`${url}/team/${id}`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          });

          let responseObject = await response.json();
          setDescription(responseObject.description);
          setName(responseObject.name);
          setSite(responseObject.site);

          let arrayDroppedBoxNames: string[] = [];
          const arrayDustibins = initialDustibins.map((elem, index) => {
            arrayDroppedBoxNames.push(responseObject?.players[index]?.name);
            return {
              ...elem,
              lastDroppedItem: {
                name: responseObject?.players[index]?.name,
                type: "player",
                age: responseObject?.players[index]?.age,
              },
            };
          });

          setDroppedBoxNames(arrayDroppedBoxNames);

          setDustbins(arrayDustibins);

          const formationOption = formationOptions.find(
            (element) => element.name === responseObject.formation
          );
          if (formationOption)
            setFormation(
              formationOption as {
                value: number;
                name: string;
              }
            );
        } catch (err) {
          console.log(err);
        } finally {
        }
      })();
    else {
      setDustbins(initialDustibins);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div css={editContainer}>
      <Paper css={paperRoot}>
        <div css={tableTitle}>
          <p css={title}>Create your team</p>
        </div>
        <p css={infoText}> TEAM INFORMATION</p>

        <EditRow>
          <StyledInput
            value={name}
            onChangeText={(text) => setName(text)}
            errorInput={!name?.length}
            inputProps={{
              placeholder: "Insert team name",
              title: "Team Name",
            }}
          />
          <StyledInput
            value={site}
            onChangeText={(text) => setSite(text)}
            errorInput={!urlRegex(site)}
            inputProps={{
              placeholder: "http://myteam.com",
              title: "Team website",
            }}
          />
        </EditRow>

        <EditRow>
          <StyledInput
            value={description}
            onChangeText={(text) => setDescription(text)}
            errorInput={!description?.length}
            inputProps={{
              title: "Description",
            }}
            customCss={css`
              height: 135px;
              resize: none;
            `}
          />

          <div css={flexColumn}>
            <div
              css={css`
                width: 100%;
                display: flex;
                position: relative;
              `}
            >
              <motion.div style={titlerStyle} animate={upperTitleState}>
                Team type
              </motion.div>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={teamType === 0}
                    onChange={() => setTeamType(0)}
                    name="checkedA"
                  />
                }
                label="Real"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={teamType === 1}
                    onChange={() => setTeamType(1)}
                    name="checkedA"
                  />
                }
                label="Fantasy"
              />
            </div>

            <div
              css={css`
                width: 100%;
                display: flex;
                position: relative;
                margin-top: 40px;
              `}
            >
              <motion.div style={titlerStyle} animate={upperTitleTag}>
                Tags
              </motion.div>
              <Autocomplete
                onChange={(event, value) => {
                  setKeywords(value);
                }}
                className={classes.root}
                value={keywords}
                multiple
                id="multiple-limit-tags"
                options={[]}
                freeSolo
                renderTags={(value, getTagProps) =>
                  value.map((option, index) => (
                    <Chip
                      color="primary"
                      label={option}
                      {...getTagProps({ index })}
                    />
                  ))
                }
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="outlined"
                    name="keywords"
                    type="text"
                  />
                )}
              />
            </div>
          </div>
        </EditRow>

        <p css={infoText}> CONFIGURE SQUAD</p>

        <TeamContainer
          dustbins={dustbins}
          setDustbins={setDustbins}
          boxes={boxes}
          setBoxes={setBoxes}
          handleSubmit={handleSubmit}
          droppedBoxNames={droppedBoxNames}
          setDroppedBoxNames={setDroppedBoxNames}
          formation={formation}
          setFormation={setFormation}
        />
      </Paper>
    </div>
  );
}

export default Edit;
