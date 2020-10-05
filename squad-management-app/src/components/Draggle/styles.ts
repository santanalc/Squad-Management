import { css } from "@emotion/core";
/** @jsx jsx */
import styled from "@emotion/styled";

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
  grid-template-areas:
    "11 12 13"
    "21 22 23"
    "31 32 33"
    "41 42 43"
    "51 52 53";

  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
`;

export const flexCenter = css`
  display: center;
  justify-content: center;
  align-items: center;
`;

export const Grid11 = styled.div`
  ${flexCenter}
  grid-area: 11;
`;

export const Grid12 = styled.div`
  ${flexCenter}
  grid-area: 12;
`;

export const Grid13 = styled.div`
  ${flexCenter}
  grid-area: 13;
`;

export const Grid21 = styled.div`
  ${flexCenter}
  grid-area: 21;
`;

export const Grid22 = styled.div`
  ${flexCenter}
  grid-area: 22;
`;

export const Grid23 = styled.div`
  ${flexCenter}
  grid-area: 23;
`;

export const Grid31 = styled.div`
  ${flexCenter}
  grid-area: 31;
`;

export const Grid32 = styled.div`
  ${flexCenter}
  grid-area: 32;
`;

export const Grid33 = styled.div`
  ${flexCenter}
  grid-area: 33;
`;

export const Grid41 = styled.div`
  ${flexCenter}
  grid-area: 41;
`;

export const Grid42 = styled.div`
  ${flexCenter}
  grid-area: 42;
`;

export const Grid43 = styled.div`
  ${flexCenter}
  grid-area: 43;
`;

export const Grid51 = styled.div`
  ${flexCenter}
  grid-area: 51;
`;

export const Grid52 = styled.div`
  ${flexCenter}
  grid-area: 52;
`;

export const Grid53 = styled.div`
  ${flexCenter}
  grid-area: 53;
`;
