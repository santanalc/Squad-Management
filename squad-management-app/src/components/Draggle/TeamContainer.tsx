/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useState, useCallback, useEffect, useRef } from "react";
import { Box } from "./Box";
import update from "immutability-helper";
import { Dustbin } from "./Dustibin";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import {
  Area,
  Boxes,
  Container,
  GridDustibin,
  SaveButton,
  selectText,
} from "./styles";
import {
  createStyles,
  FormControl,
  makeStyles,
  NativeSelect,
  Theme,
} from "@material-ui/core";
import { getArea, getGridDustibin } from "./dinamicArea";
import StyledInput from "../StyledInput";
import {
  BoxState,
  DustbinState,
  formationOptions,
  initialDustibins,
} from "../../views/Edit/Edit";
import { Dispatch } from "@testing-library/react/node_modules/@types/react";
import { SetStateAction } from "@testing-library/react/node_modules/@types/react";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      marginLeft: theme.spacing(2),
      minWidth: 120,
    },
  })
);

export interface DustbinSpec {
  accepts: string[];
  lastDroppedItem: any;
}
export interface BoxSpec {
  name: string;
  type: string;
}
export interface ContainerState {
  droppedBoxNames: string[];
  dustbins: DustbinSpec[];
  boxes: BoxSpec[];
}

interface Props {
  dustbins: DustbinState[];
  setDustbins: Dispatch<SetStateAction<DustbinState[]>>;
  boxes: BoxState[];
  setBoxes: Dispatch<SetStateAction<BoxState[]>>;
  droppedBoxNames: string[];
  setDroppedBoxNames: Dispatch<SetStateAction<string[]>>;
  formation: { value: any; name: string };
  setFormation: Dispatch<
    SetStateAction<{
      value: any;
      name: string;
    }>
  >;
  handleSubmit: any;
}

export function TeamContainer(props: Props) {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const classes = useStyles();
  const firstUpdate = useRef(true);

  const {
    dustbins,
    setDustbins,
    boxes,
    setBoxes,
    droppedBoxNames,
    setDroppedBoxNames,
    formation,
    setFormation,
    handleSubmit,
  } = props;

  function isDropped(boxName: string) {
    return droppedBoxNames.indexOf(boxName) > -1;
  }

  const handleDrop = useCallback(
    (index: number, item: { name: string; age: number }) => {
      const { name } = item;
      setDroppedBoxNames(
        update(droppedBoxNames, name ? { $push: [name] } : { $push: [] })
      );
      setDustbins(
        update(dustbins, {
          [index]: {
            lastDroppedItem: {
              $set: item,
            },
          },
        })
      );
    },
    [droppedBoxNames, dustbins, setDroppedBoxNames, setDustbins]
  );

  const handleChange = (
    event: React.ChangeEvent<{
      value: unknown;
      name?: string;
    }>
  ) => {
    const name = event.target.name as keyof typeof formation;
    setFormation({
      ...formation,
      [name]: event.target.value,
    });
  };

  useEffect(() => {
    if (firstUpdate.current) {
      setTimeout(() => (firstUpdate.current = false), 1000);
      return;
    } else {
      setDustbins(initialDustibins);
      setDroppedBoxNames([]);
    }
  }, [formation, setDroppedBoxNames, setDustbins]);

  useEffect(() => {
    if (name.length >= 4)
      (async () => {
        setLoading(true);
        try {
          let response = await fetch(
            `https://api-football-v1.p.rapidapi.com/v2/players/search/${name}`,
            {
              method: "GET",
              headers: {
                "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
                "x-rapidapi-key":
                  "b2f92d5118mshaa17c597c6bda72p13e267jsn3aba431a54e4",
              },
            }
          );

          let responseObject = await response.json();

          let players = responseObject.api.players
            .slice(0, 11)
            .map((elem: { player_name: any; nationality: any; age: any }) => {
              return {
                name: elem.player_name,
                nationality: elem.nationality,
                age: elem.age,
                type: "player",
              };
            });
          setBoxes(players);
        } catch (err) {
          console.log(err);
        } finally {
          setLoading(false);
        }
      })();
    if (name.length === 0) {
      setBoxes([]);
    }
  }, [name, setBoxes]);

  return (
    <DndProvider backend={HTML5Backend}>
      <Container>
        <div>
          <div css={selectText}>
            <p>Formation</p>
            <FormControl variant="filled" className={classes.formControl}>
              <NativeSelect
                value={formation.value}
                onChange={handleChange}
                inputProps={{
                  name: "value",
                  id: "age-native-label-placeholder",
                }}
              >
                {formationOptions.map((elem) => {
                  return <option value={elem.value}>{elem.name}</option>;
                })}
              </NativeSelect>
            </FormControl>
          </div>
          <Area css={getArea(parseInt(formation.value))}>
            {dustbins.map(({ accepts, lastDroppedItem, id }, index) => (
              <GridDustibin key={id} css={getGridDustibin(id)}>
                <Dustbin
                  accept={accepts}
                  lastDroppedItem={lastDroppedItem}
                  onDrop={(item) => {
                    handleDrop(index, item);
                  }}
                  key={index}
                />
              </GridDustibin>
            ))}
          </Area>
          <SaveButton
            style={{ y: 0, x: 0 }}
            whileTap={{
              y: 1,
            }}
            onClick={() => handleSubmit()}
          >
            Save
          </SaveButton>
        </div>
        <div>
          <StyledInput
            value={name}
            onChangeText={(text) => setName(text)}
            errorInput={false}
            inputProps={{
              placeholder: "Ronal",
              title: "Search Players",
            }}
            customCss={css`
              margin-bottom: 10px;
            `}
          />
          <Boxes>
            {boxes.map((elem, index) => (
              <Box
                boxElem={elem}
                isDropped={isDropped(elem.name)}
                key={index}
              />
            ))}
          </Boxes>
        </div>
      </Container>
    </DndProvider>
  );
}
