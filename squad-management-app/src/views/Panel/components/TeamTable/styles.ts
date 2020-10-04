/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import styled from "@emotion/styled/macro";
import { motion } from "framer-motion";
import { MdUnfoldMore } from "react-icons/md";

export const root = css`
  background-color: #f7f3f7;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
`;

export const tableTitle = css`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #f7f3f7;
  padding: 0px 20px 0px 20px;
`;

export const AddButton = styled(motion.button)`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  border: none;
  outline: none;
  background: linear-gradient(45deg, #bf0e4f 30%, #552c8a 70%);
  border-bottom-width: 3px;
  border-bottom-style: solid;
  border-bottom-color: #552c8a;
`;

export const title = css`
  font-weight: bold;
  color: #552c8a;
  font-size: 22px;
`;

export const Table = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 95%;
  font-weight: bold;
`;

export const gridRow = css`
  display: grid;
  grid-template-columns: 3fr 9fr;
  align-items: center;
  width: 100%;
  padding: 10px 10px 10px 10px;
  height: 50px;
`;

export const NameControl = styled.div`
  display: flex;
  justify-content: space-between;
  border-right: 1px solid #f7f3f7;
  padding-right: 20px;
  height: 100%;
  align-items: center;
`;

export const SortButton = styled(motion.div)`
  height: 15px;
  width: 15px;
  cursor: pointer;
`;

export const DescriptionControl = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  align-items: center;
  padding-left: 10px;
`;

export const RowTable = styled.div`
  ${gridRow}
  &:hover {
    background-color: #f7eef6;
    color: #c36a9b;
  }
  border-bottom: 1px solid #f7f3f7;
  border-radius: 10px;
`;

export const CellIcons = styled.div`
  display: none;
  ${RowTable}:hover & {
    display: flex;
    justify-content: space-between;
    height: 100%;
    align-items: center;
    width: 80px;
  }
`;
