import styled from "@emotion/styled";
import { Box } from "@mui/material";
import React from "react";
import InputField from "../../../../genericComponent/inputfield";
import smileImoji from "../../../../assets/images/SmileEmoji.svg";
import AttachmentIcon from "../../../../assets/images/MicIcon.svg";
import FileAttachment from "../../../../assets/images/FileAttachment.svg";
import Image from "../../../../genericComponent/image";
export default function InputFutter() {
  const FutterContainer = styled(Box)`
    width: 100%;
    height: 57px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #f0f2f5;
    & .InputTitle {
      width: 100%;
      padding: 4px 10px;
      background: #ffffff;
    }
  `;
  const IconContainer = styled(Box)`
    width: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 10px;
    & .MicIcon {
      width: 70px;
    }
  `;
  return (
    <FutterContainer>
      <IconContainer>
        <Image src={smileImoji} />
        <Image src={FileAttachment} />
      </IconContainer>
      <InputField className="InputTitle" placeholder={"type a message"} />
      <Image src={AttachmentIcon} className="MicIcon" />
    </FutterContainer>
  );
}
