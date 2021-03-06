import { css } from "@emotion/core";
/** @jsx jsx */
import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 10vw;
  width: 80%;
  height: auto;
  margin: 50px 0px 40px 0px;
  height: auto;
  @media (max-width: 420px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    grid-row-gap: 10vw;
  }
`;

export const selectText = css`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 10px;
`;

export const Area = styled.div`
  background: linear-gradient(315deg, #752c81 10%, #b13b7c 90%);
  height: 550px;
  width: 100%;
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
`;

export const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const GridDustibin = styled.div`
  ${flexCenter}
`;

export const Boxes = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const SaveButton = styled(motion.button)`
  margin-top: 20px;
  width: 100%;
  height: 50px;
  background: linear-gradient(0deg, #752c81 50%, #b13b7c 90%);
  border-radius: 5px;
  ${flexCenter}
  font-weight:bold;
  color: white;
  border: none;
  outline: none;
`;
