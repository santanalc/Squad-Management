/** @jsx jsx */
import { css } from "@emotion/core";

export const root = css`
  background-color: #f7f3f7;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
`;

export const nav = css`
  position: fixed;
  top: 0;
  left: 0;
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(45deg, #bf0e4f 30%, #8a206f 90%);
`;

export const logo = css`
  height: 40px;
  width: 40px;
`;

export const leftBlock = css`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 250px;
  margin-left: 20px;
`;

export const rigthBlock = css`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 150px;
  margin-right: 10px;
`;

export const container = css`
  display: flex;
  width: 90%;
  max-width: 90%;
  height: 100%;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 50px 0px 40px 0px;
`;

export const paper = css`
  border: 30px;
  width: 100%;
  height: 100%;
`;

export const leftArea = css`
  width: 100%;
  height: 100%;
  flex: 1 1 300px;
  margin: 20px;
`;

export const rightArea = css`
  width: 100%;
  height: 100%;
  flex: 1 1 300px;
  margin: 20px;
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-row-gap: 40px;
`;
