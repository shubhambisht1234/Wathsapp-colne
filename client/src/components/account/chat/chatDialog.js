import { Box, Dialog, styled } from "@mui/material";
import React, { useContext, useState } from "react";
import Menu from "./menu/menu";
import EmptyChat from "./chat/EmptyChat";
import Serarch from "./menu/Serarch";
import ChatBox from "./chat/ChatBox";
import WathsappIcon from "../../../assets/images/WathsappImage.jpg";

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
`;
const RightContainer = styled(Box)`
  min-width: 70%;
  background: ${(props) =>
    props?.color ? ` url(${WathsappIcon})` : "#f9f8f9"};
`;
export default function ChatDialog() {
  const [chatListOpen, setChatListOpen] = useState({
    condition: false,
    userData: null,
  });
  return (
    <>
      <Dialog open={true} PaperProps={{ sx: dialogStyle }} hideBackdrop={true}>
        <Component>
          <LeftContainer>
            <Menu setChatListOpen={setChatListOpen} />
          </LeftContainer>
          <RightContainer color={chatListOpen?.condition}>
            {chatListOpen?.condition ? (
              <ChatBox userData={chatListOpen?.userData} />
            ) : (
              <EmptyChat />
            )}
          </RightContainer>
        </Component>
        {/* <FutterVideo></FutterVideo> */}
      </Dialog>
    </>
  );
}
