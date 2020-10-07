/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { Avatar } from "@material-ui/core";
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

const text = css`
  font-weight: bold;
  color: white;
  font-size: 16px;
`;

function Navbar() {
  return (
    <nav css={nav}>
      <span css={leftBlock}>
        <img alt="Logo" src={VenturusLogo} css={logo} />
        <p css={text}> Squad Management Tool</p>
      </span>
      <span css={rigthBlock}>
        <p css={text}>Jonh Doe</p>
        <Avatar sizes={"small"}>
          <p
            css={css`
              color: black;
            `}
          >
            JD
          </p>
        </Avatar>
      </span>
    </nav>
  );
}

export default Navbar;
