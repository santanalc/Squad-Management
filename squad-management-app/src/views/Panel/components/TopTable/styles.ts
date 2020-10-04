/** @jsx jsx */
import { css } from "@emotion/core";
import styled from "@emotion/styled/macro";
import { motion } from "framer-motion";

interface Props {
  selected: boolean;
}

export const root = css`
  background-color: #f7f3f7;
  width: 100%;
  height: 100%;
  border: 30px;
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
  justify-content: flex-start;
  border-bottom: 1px solid #f7f3f7;
  padding: 0px 20px 0px 20px;
`;

export const title = css`
  font-weight: bold;
  color: #552c8a;
  font-size: 22px;
`;

export const TableContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 15px;
  padding: 15px;
  width: 100%;
  height: 100%;
`;

export const TableRoot = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Table = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  background: #f7f3f7;
  border-radius: 10px;
  padding: 5px;
`;

export const TableRow = styled.div<Props>`
  display: flex;
  padding: 12px;
  align-items: center;
  justify-content: space-between;
  background: white;
  width: 100%;
  height: 35px;
  border-radius: 10px;
  border: ${(props) => (props.selected ? "1px solid #8a206f" : "none")};
`;

export const titleTable = css`
  text-align: left;
  font-weight: bold;
  margin-bottom: 5px;
`;
