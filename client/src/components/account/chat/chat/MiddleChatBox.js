import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import React from "react";
import BackgroundImage from "../../../../assets/images/WathsappImage.jpg";

export default function MiddleChatBox() {
  const Container = styled(Box)`
    display: block;
    height: 71vh;
  `;
  const LeftChatBox = styled(Box)`
    display: flex;
    justify-content: end;
  `;
  const MessageConatiner = styled(Box)`
    width: 26%;
    height: auto;
    display: block;
    overflow: hidden;
    & .bubble {
      float: left;
      max-width: 75%;
      width: auto;
      height: auto;
      display: block;
      background: #ebebeb;
      border-radius: 5px;
      position: relative;
      margin: 10px 0 3px 25px;
      box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.2);
    }
    & .txt {
      padding: 8px 0 8px 0;
      width: 100%;
    }
    & .name {
      font-weight: 600;
      font-size: 14px;
      display: inline-table;
      padding: 0 0 0 15px;
      margin: 0 0 4px 0;
      color: #3498db;
    }
    & .timestamp {
      font-size: 11px;
      margin: auto;
      padding: 0 15px 0 0;
      display: table;
      float: right;
      position: relative;
      text-transform: uppercase;
      color: #999;
    }
    & .message{
      font-size: 14px;
      font-weight:500;
      padding: 0 15px 0 15px;
      margin: auto;
      color: #2b2b2b;
      & .bubble-arrow{
        position: absolute;
        float:left;
        left: -11px;
        top: 0px;
        &.alt{
          bottom: 20px;
          left: auto;
          right: 4px;
          float:right;
  }
  `;
  const RightChatBox = styled(Box)``;
  return (
    <>
      <Container>
        <LeftChatBox>
          <MessageConatiner className="msg">
            <Box className="bubble alt">
              <Box className="txt">
                <Typography className="name alt">Sakham Bisht</Typography>
                <Typography className="timestamp">10:22 pm</Typography>
                <Typography className="message">Hello Shubham</Typography>
              </Box>
              <Box className="bubble-arrow alt"></Box>
            </Box>
          </MessageConatiner>
        </LeftChatBox>
        <MessageConatiner className="msg">
          <Box className="bubble alt">
            <Box className="txt">
              <Typography className="name alt">Shubham Bisht</Typography>
              <Typography className="timestamp">10:22 pm</Typography>
              <Typography className="message">Hello Saksham</Typography>
            </Box>
            <Box className="bubble-arrow alt"></Box>
          </Box>
        </MessageConatiner>
      </Container>
    </>
  );
}
