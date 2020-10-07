/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Paper } from "@material-ui/core";
import {
  Card,
  root,
  Title,
  AvatarContainer,
  Avatar,
  PercentContainer,
  Percent,
} from "./styles";

function InfoTable() {
  return (
    <Paper css={root}>
      <Card>
        <Title>Most Picked player</Title>
        <AvatarContainer>
          <Avatar>LS</Avatar>
        </AvatarContainer>
        <PercentContainer>
          <Percent>75%</Percent>
        </PercentContainer>
      </Card>
      <Card>
        <Title>Most Picked player</Title>
        <AvatarContainer>
          <Avatar>LS</Avatar>
        </AvatarContainer>
        <PercentContainer>
          <Percent>75%</Percent>
        </PercentContainer>
      </Card>
    </Paper>
  );
}

export default InfoTable;
