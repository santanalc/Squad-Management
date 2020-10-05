/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import VenturusLogo from "../images/venturus-logo.svg";

const nav = css`
  position: fixed;
  top: 0;
  left: 0;
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(45deg, #bf0e4f 30%, #8a206f 90%);
  z-index: 999;
`;
const logo = css`
  height: 40px;
  width: 40px;
`;
const leftBlock = css`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 250px;
  margin-left: 20px;
`;
const rigthBlock = css`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 150px;
  margin-right: 10px;
`;

function Navbar() {
  return (
    <nav css={nav}>
      <span css={leftBlock}>
        <img alt="Logo" src={VenturusLogo} css={logo} />
        <p> Squad Management Tool</p>
      </span>
      <span css={rigthBlock}>
        <p>Jonh Doe</p>
        <img alt="Logo" src={VenturusLogo} css={logo} />
      </span>
    </nav>
  );
}

export default Navbar;
