import styled from "@emotion/styled";
import React, { useState } from "react";
import AvatarComponent from "../../../../genericComponent/Avatar.js";
import { useContext } from "react";
import { AccountContext } from "../../../context/acountProvider.js";
import { Box } from "@mui/material";
import menu from "../../../../assets/images/MenuIncon.svg";
import message from "../../../../assets/images/MessageIcon.svg";
import status from "../../../../assets/images/StatusIcon.svg";
import InfoDrawer from "../drawer/InfoDrawer.js";
export default function Header() {
  //   const Image = styled("img")({});
  const [openDrawer, setOpenDrawer] = useState(false);
  const { account } = useContext(AccountContext);
  const HeaderContainer = styled(Box)`
    height: 70px;
    background: #eeeeee;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 20px;
  `;
  const Container = styled(Box)`
    display: flex;
    width: 111px;
    justify-content: space-between;
  `;
  // console.log(openDrawer, "openDrawer");
  return (
    <>
      <InfoDrawer
        account={account}
        openDrawer={openDrawer}
        setOpenDrawer={setOpenDrawer}
      />
      <HeaderContainer>
        <AvatarComponent
          src={account?.picture}
          alt={"Not found"}
          onClick={() => setOpenDrawer(!openDrawer)}
        />
        <Container>
          <img src={status} />
          <img src={message} />
          <img src={menu} />
        </Container>
      </HeaderContainer>
    </>
  );
}
