/** @jsx jsx */
import { css } from "@emotion/core";

export const root = css`
  background-color: #f7f3f7;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
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
