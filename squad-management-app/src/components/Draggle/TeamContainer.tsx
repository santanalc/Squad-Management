/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useState, useCallback } from "react";
import { Box } from "./Box";
import update from "immutability-helper";
import { Dustbin } from "./Dustibin";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Area, Container, selectText } from "./styles";
import {
  createStyles,
  FormControl,
  InputLabel,
  makeStyles,
  NativeSelect,
  Theme,
} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      marginLeft: theme.spacing(2),
      minWidth: 120,
    },
  })
);

interface DustbinState {
  id: number;
  accepts: string[];
  lastDroppedItem: any;
}

interface BoxState {
  name: string;
  type: string;
}

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

export const TeamContainer: React.FC = () => {
  const classes = useStyles();
  const [formation, setFormation] = useState<{
    value: string | number;
    name: string;
  }>({ value: 0, name: "3 - 4 - 3" });
  const [dustbins, setDustbins] = useState<DustbinState[]>([
    { id: 0, accepts: ["player"], lastDroppedItem: null },
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
  ]);

  const [boxes] = useState<BoxState[]>([
    { name: "Bottle", type: "player" },
    { name: "Banana", type: "player" },
    { name: "Magazine", type: "player" },
  ]);

  const [droppedBoxNames, setDroppedBoxNames] = useState<string[]>([]);

  function isDropped(boxName: string) {
    return droppedBoxNames.indexOf(boxName) > -1;
  }

  const handleDrop = useCallback(
    (index: number, item: { name: string }) => {
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
    [droppedBoxNames, dustbins]
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
                <option value={0}>3 - 4 - 4</option>
                <option value={1}>3 - 2 - 2 - 3</option>
                <option value={2}>3 - 2 - 3 - 1</option>
                <option value={3}>3 - 4 - 3</option>
                <option value={4}>3 - 5 - 2</option>
                <option value={5}>4 - 2 - 3 - 1</option>
                <option value={6}>4 - 3 - 1 - 1</option>
                <option value={7}>4 - 3 - 2</option>
                <option value={8}>4 - 4 - 2</option>
                <option value={9}>4 - 5 - 1</option>
                <option value={10}>5 - 4 -1</option>
              </NativeSelect>
            </FormControl>
          </div>

          <Area>
            {dustbins.map(({ accepts, lastDroppedItem }, index) => (
              <Dustbin
                accept={accepts}
                lastDroppedItem={lastDroppedItem}
                onDrop={(item) => handleDrop(index, item)}
                key={index}
              />
            ))}
          </Area>
        </div>

        <div>
          {boxes.map(({ name, type }, index) => (
            <Box
              name={name}
              type={type}
              isDropped={isDropped(name)}
              key={index}
            />
          ))}
        </div>
      </Container>
    </DndProvider>
  );
};
