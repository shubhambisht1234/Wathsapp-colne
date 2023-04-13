import React from "react";
import { emptyChatImage } from "../../../../constant/AllTextContainer";
import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";

export default function EmptyChat() {
  const Container = styled(Box)`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  const ImageWrapper = styled(Box)``;
  const Image = styled("img")({
    width: "498px",
  });
  const TextContainer = styled(Box)`
    text-align: center;
  `;
  const TextHadder = styled(Box)`
    font-size: 32px;
    font-weight: 300;
    color: #41525d;
    padding: 20px 0px;
  `;
  const ParagarphTitle = styled(Typography)`
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    color: #7c7781;
  `;
  const FutterText = styled(Box)`
    font-size: 6px;
    font-weight: 400;
    line-height: 20px;
    color: #7c7781;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
    & :first-child {
      width: 15px;
    }
    & :last-child {
      font-size: 15px;
    }
  `;

  return (
    <>
      <Container>
        <ImageWrapper>
          <Image src={emptyChatImage} />
          <TextContainer>
            <TextHadder>WhatsApp Web</TextHadder>
            <ParagarphTitle>
              Send and receive messages without keeping your phone online.
            </ParagarphTitle>
            <ParagarphTitle>
              Use WhatsApp on up to 4 linked devices and 1 phone at the same
              time.
            </ParagarphTitle>
            <FutterText>
              <LockIcon />
              <Typography>End-to-end encrypted</Typography>
            </FutterText>
          </TextContainer>
        </ImageWrapper>
      </Container>
    </>
  );
}
