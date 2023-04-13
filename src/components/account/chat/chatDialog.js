import { Box, Dialog, styled } from "@mui/material";
import React, { useContext } from "react";
import Menu from "./menu/menu";
import EmptyChat from "./chat/EmptyChat";
import Serarch from "./menu/Serarch";

const dialogStyle = {
  height: "100%",
  marginTop: "2%",
  width: "100%",
  boxShadow: "none",
  maxWidth: "100%",
  // borderRadius: "0px",
  overFlow: "none",
};
const Component = styled(Box)`
  display: flex;
`;
const LeftContainer = styled(Box)`
  width: 450px;
  height: 90vh;
  // background: red;
`;
const RightContainer = styled(Box)`
  min-width: 70%;
  background: #f9f8f9;
`;
export default function ChatDialog() {
  return (
    <>
      <Dialog open={true} PaperProps={{ sx: dialogStyle }} hideBackdrop={true}>
        <Component>
          <LeftContainer>
            <Menu />
            <Serarch />
          </LeftContainer>
          <RightContainer>
            <EmptyChat />
          </RightContainer>
        </Component>
        {/* <FutterVideo></FutterVideo>  */}
      </Dialog>
    </>
  );
}
