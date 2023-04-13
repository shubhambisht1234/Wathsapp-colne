import styled from "@emotion/styled";
import { Avatar, Box, SwipeableDrawer, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import React from "react";
import { AllTextContainer } from "../../../../constant/AllTextContainer";
import AvatarComponent from "../../../../genericComponent/Avatar";

export default function InfoDrawer({ account, openDrawer, setOpenDrawer }) {
  const DrawerStyle = {
    left: 30,
    top: 30,
    height: "90%",
    width: "390px",
    background: "#F0F2F5",
  };
  const HeaderContainer = styled(Box)`
    background: #008069;
    height: 100px;
    display: flex;
  `;
  const Wrapper = styled(Box)`
    display: flex;
    padding: 10px 20px;
    align-self: flex-end;
    color: #ffffff;
  `;
  const TextWrapper = styled(Typography)`
    margin-left: 10px;
  `;

  const styledName = {
    width: "100px",
    height: "100px",
  };
  const UserProfile = styled(Box)`
    justify-content: center;
    display: flex;
    padding: 20px 0px;
  `;
  const Container = styled(Box)`
    background: #ffffff;
    // height: 80px;
    padding: 15px 17px;
    & :first-child {
      color: #008069;
    }
  `;

  const TextContainer = styled(Box)`
    height: 80px;
    & > p {
      color: #667781;
      font-size: 13px;
      padding: 22px 20px;
    }
  `;
  return (
    <>
      <SwipeableDrawer
        // anchor={anchor}
        open={openDrawer}
        PaperProps={{ sx: DrawerStyle }}
        // onClose={toggleDrawer(anchor, false)}
        // onOpen={toggleDrawer(anchor, true)}
        style={{ zIndex: 1500 }}
      >
        <Box>
          <HeaderContainer>
            <Wrapper>
              <ArrowBackIcon onClick={() => setOpenDrawer(!openDrawer)} />
              <TextWrapper>{AllTextContainer?.profile}</TextWrapper>
            </Wrapper>
          </HeaderContainer>
          <Box>
            <UserProfile>
              {/* <UserProfile src={UsrProfile} /> */}
              <AvatarComponent styledName={styledName} src={account?.picture} />
            </UserProfile>
            <Container>
              <Typography>Your Name</Typography>
              <Typography>{account?.name}</Typography>
            </Container>
            <TextContainer>
              <Typography>
                This is not your username or pin. This name will be visible to
                your WhatsApp contacts.
              </Typography>
            </TextContainer>
            <Container>
              <Typography>About</Typography>
              <Typography>
                Ability is limitless.. 💪🏻 do more. Be more... 🔥
              </Typography>
            </Container>
          </Box>
        </Box>
      </SwipeableDrawer>
    </>
  );
}
