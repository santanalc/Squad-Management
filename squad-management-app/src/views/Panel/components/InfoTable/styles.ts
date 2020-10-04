/** @jsx jsx */
import { css } from "@emotion/core";
import styled from "@emotion/styled/macro";
import { motion } from "framer-motion";

export const root = css`
  background: linear-gradient(0deg, #8a206f 40%, #bf0e4f 90%);
  width: 100%;
  height: 100%;
  border: 30px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-items: center;
`;

export const Card = styled.div`
  display: grid;
  align-items: center;
  grid-template-areas:
    "text text"
    "avatar perc";
  grid-template-columns: 8fr 4fr;
  grid-template-rows: 50px auto;
  width: 80%;
  height: 60%;
  color: white;
`;

export const Title = styled.p`
  grid-area: text;
  font-weight: bold;
  font-size: 20px;
`;

export const AvatarContainer = styled.div`
  grid-area: avatar;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PercentContainer = styled.div`
  grid-area: perc;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: 100%;
`;

export const Percent = styled.p`
  font-size: 16px;
  font-weight: bold;
  border-bottom: 1px solid white;
  padding-right: 20px;
`;

export const Avatar = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 80px;
  border: 3px dashed #a06eb8;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
`;
