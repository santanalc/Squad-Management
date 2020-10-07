/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { InputHTMLAttributes, forwardRef } from "react";
import { motion, MotionStyle, TargetAndTransition } from "framer-motion";

interface Props {
  value: string;
  onChangeText: (text: string) => any;
  errorInput: boolean;
  inputProps: InputHTMLAttributes<HTMLInputElement>;
  customCss?: any;
}

function StyledInput(props: Props, ref: any) {
  return (
    <div
      css={css`
        width: 100%;
        display: flex;
        position: relative;
        z-index: 0;
      `}
    >
      {
        <motion.div
          style={titlerStyle}
          animate={
            props.inputProps.title === "Description"
              ? upperTitleStateTextAra
              : upperTitleState
          }
          css={css`
            color: ${props.errorInput ? "#a3377d" : "#000000"};
          `}
        >
          {props.inputProps.title}
        </motion.div>
      }
      {props.inputProps.title === "Description" ? (
        <textarea
          value={props.value}
          onChange={(evt) => props.onChangeText(evt.target.value)}
          placeholder={props.inputProps.placeholder}
          css={[
            inputStyle,
            props.customCss,
            css`
              border-color: ${props.errorInput && "#a3377d"};
              &::placeholder {
                opacity: 1;
              }
            `,
          ]}
        />
      ) : (
        <input
          type={"text"}
          value={props.value}
          onChange={(evt) => props.onChangeText(evt.target.value)}
          placeholder={props.inputProps.placeholder}
          css={[
            inputStyle,
            props.customCss,
            css`
              border-color: ${props.errorInput && "#a3377d"};
              &::placeholder {
                opacity: 1;
              }
            `,
          ]}
        />
      )}
    </div>
  );
}

export default forwardRef(StyledInput);

export const titlerStyle: MotionStyle = {
  position: "absolute",
  bottom: 15,
  left: 0,
  scale: 1,
  pointerEvents: "none",
  originX: 0.1,
};

export const upperTitleState: TargetAndTransition = {
  y: -20,
  scale: 0.8,
  opacity: 1,
};

const upperTitleStateTextAra: TargetAndTransition = {
  y: -130,
  scale: 0.8,
  opacity: 1,
};

const inputStyle = css`
  width: 100%;
  height: 30px;
  border-radius: 5px;
  border-width: 1px;
  border-style: solid;
  border-color: #d5d5d5;
  outline: none;
  font-family: "Muli", sans-serif;
  -webkit-appearance: none;
  padding: 10px;
  &:hover {
    border-color: #000000;
  }
`;
