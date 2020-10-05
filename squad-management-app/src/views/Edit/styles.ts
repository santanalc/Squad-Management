/** @jsx jsx */
import { css } from "@emotion/core";
import styled from "@emotion/styled";

export const paperRoot = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
`;

export const editContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 95%;
  margin: 70px 0px 40px 0px;
`;

export const infoText = css`
  color: #8d8d8d;
  font-weight: bold;
  margin-top: 30px;
`;

export const inputsRow = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const EditRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 10vw;
  width: 80%;
  margin-top: 50px;
  height: auto;
  @media (max-width: 420px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    grid-row-gap: 10vw;
    width: 90%;
  }
`;

export const flexColumn = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;
