/** @jsx jsx */
import { jsx } from "@emotion/core";
import styled from "@emotion/styled";
import { useDrop } from "react-dnd";

interface StyleProps {
  backgroundcolor: string;
}
const DustibinDiv = styled.div`
  height: 60px;
  width: 60px;
  border-radius: 60px;
  border: 2px dashed #a06eb8;
  color: white;
  padding: 2rem;
  text-align: center;
  font-size: 1rem;
  line-height: normal;
  float: left;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
`;

const DustibinFill = styled.div<StyleProps>`
  height: 50px;
  width: 50px;
  border-radius: 50px;
  padding: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.backgroundcolor};
`;

export interface DustbinProps {
  accept: string[];
  lastDroppedItem?: any;
  onDrop: (item: any) => void;
}

export const Dustbin: React.FC<DustbinProps> = ({
  accept,
  lastDroppedItem,
  onDrop,
}) => {
  const [{ canDrop }, drop] = useDrop({
    accept,
    drop: onDrop,
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  let backgroundColor = "#CD9ABE";
  if (canDrop) {
    backgroundColor = "#a06eb8";
  }

  return (
    <DustibinDiv>
      <DustibinFill ref={drop} backgroundcolor={backgroundColor}>
        {lastDroppedItem && <p>{lastDroppedItem.name.match(/\b(\w)/g)}</p>}
      </DustibinFill>
    </DustibinDiv>
  );
};
