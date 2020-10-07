/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import styled from "@emotion/styled";
import { useDrag } from "react-dnd";
import { BoxState } from "../../views/Edit/Edit";

interface StyleProps {
  opacity: number;
  dropped: boolean;
}

const BoxDiv = styled.div<StyleProps>`
  border: 1px dashed gray;
  background: linear-gradient(0deg, #e5e5e5 10%, #fdfdfd 90%);
  padding: 0.5rem 1rem;
  margin-bottom: 1.5rem;
  cursor: move;
  float: left;
  user-select: none;
  width: 100%;
  height: 70px;
  opacity: ${(props) => (props.dropped ? 0.4 : props.opacity)};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const spaceBet = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const phrase = css`
  font-weight: bold;
  display: flex;
  flex-direction: row;
`;

const info = css`
  font-weight: normal;
  color: #d4507a;
  margin-left: 5px;
`;

export interface BoxProps {
  boxElem: BoxState;
  isDropped: boolean;
}

export const Box: React.FC<BoxProps> = ({ boxElem, isDropped }) => {
  const [{ opacity }, drag] = useDrag({
    item: { name: boxElem.name, type: boxElem.type },
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.4 : 1,
    }),
  });

  return (
    <BoxDiv
      ref={drag}
      opacity={opacity}
      draggable={!isDropped}
      dropped={isDropped}
    >
      <div css={spaceBet}>
        <p css={phrase}>
          Name: <p css={info}> {boxElem.name}</p>
        </p>
        <p css={phrase}>
          Age: <p css={info}> {boxElem.age}</p>
        </p>
      </div>
      <div css={spaceBet}>
        <p css={phrase}>
          Nationality: <p css={info}> {boxElem.nationality}</p>
        </p>
      </div>
    </BoxDiv>
  );
};
