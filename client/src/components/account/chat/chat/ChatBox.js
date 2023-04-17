import React from "react";
import ChatHeader from "./ChatHeader";
import MiddleChatBox from "./MiddleChatBox";
import InputFutter from "./InputFutter";
import styled from "@emotion/styled";
import { Box } from "@mui/material";

export default function ChatBox({ userData }) {
  const Container = styled(Box)``;
  const Futter = styled(Box)``;
  return (
    <>
      <Container>
        <ChatHeader userData={userData} />
        <MiddleChatBox /> <InputFutter />
      </Container>
    </>
  );
}
