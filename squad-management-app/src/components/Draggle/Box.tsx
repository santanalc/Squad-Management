/** @jsx jsx */
import { jsx } from "@emotion/core";
import styled from "@emotion/styled";
import { useDrag } from "react-dnd";

interface StyleProps {
  opacity: number;
}

const BoxDiv = styled.div<StyleProps>`
  border: 1px dashed gray;
  background-color: white;
  padding: 0.5rem 1rem;
  margin-right: 1.5rem;
  margin-bottom: 1.5rem;
  cursor: move;
  float: left;
  user-select: none;
  opacity: ${(props) => props.opacity};
`;

export interface BoxProps {
  name: string;
  type: string;
  isDropped: boolean;
}

export const Box: React.FC<BoxProps> = ({ name, type, isDropped }) => {
  const [{ opacity }, drag] = useDrag({
    item: { name, type },
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.4 : 1,
    }),
  });

  return (
    <BoxDiv ref={drag} opacity={opacity} draggable={!isDropped}>
      {isDropped ? <s>{name}</s> : name}
    </BoxDiv>
  );
};
