/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import {
  Checkbox,
  Chip,
  FormControlLabel,
  Paper,
  TextField,
} from "@material-ui/core";
import { useState } from "react";
import StyledInput, {
  titlerStyle,
  upperTitleState,
} from "../../components/StyledInput";
import { tableTitle, title } from "../Panel/components/TeamTable/styles";
import { root } from "../Panel/styles";
import { container, EditRow, flexColumn, infoText, inputsRow } from "./styles";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles } from "@material-ui/styles";
import { motion, TargetAndTransition } from "framer-motion";

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
function Edit() {
  const [name, setName] = useState("");
  const [teamType, setTeamType] = useState(0);
  const [keywords, setKeywords] = useState<any>();
  const classes = useStyles();

  return (
    <div css={root}>
      <Paper css={container}>
        <div css={tableTitle}>
          <p css={title}>Create your team</p>
        </div>
        <p css={infoText}> TEAM INFORMATION</p>

        <EditRow>
          <StyledInput
            value={name}
            onChangeText={(text) => setName(text)}
            errorInput={false}
            inputProps={{
              placeholder: "Insert team name",
              title: "Team Name",
            }}
          />
          <StyledInput
            value={name}
            onChangeText={(text) => setName(text)}
            errorInput={false}
            inputProps={{
              placeholder: "http://myteam.com",
              title: "Team website",
            }}
          />
        </EditRow>

        <EditRow>
          <StyledInput
            value={name}
            onChangeText={(text) => setName(text)}
            errorInput={false}
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
      </Paper>
    </div>
  );
}

export default Edit;
