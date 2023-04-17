import styled from "@emotion/styled";
import { Box } from "@mui/material";
import React, { useState } from "react";
import AvatarComponent from "../../../../genericComponent/Avatar";
import searchIcon from "../../../../assets/images/Search.svg";
import menuIcon from "../../../../assets/images/MenuIncon.svg";
// const { account } = useContext(AccountContext);
const WraperLeft = styled(Box)`
  height: 70px;
  background: #eeeeee;
  display: flex;
  // justify-content: space-between;
  align-items: center;
`;
const WraperRight = styled(Box)`
  width: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const HeaderContainer = styled(Box)`
  border-left: 1px solid #d1d7db;
  height: 70px;
  background: #eeeeee;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
`;
const TitleName = styled(Box)`
  margin-left: 10px;
`;
const TitleStatue = styled(Box)`
  margin-left: 10px;
  color: #25d366;
  font-size: 14px;
`;
const ImageIcon = styled("img")({
  width: "30px",
});
export default function ChatHeader({ userData }) {
  const [openDrawer, setOpenDrawer] = useState(false);
  console.log(userData, "userData");
  return (
    <>
      <HeaderContainer>
        <WraperLeft>
          <AvatarComponent src={userData?.picture} alt={"Not found"} />
          <Box>
            <TitleName>{userData?.name}</TitleName>
            <TitleStatue>Online</TitleStatue>
          </Box>
        </WraperLeft>
        <WraperRight>
          <ImageIcon src={searchIcon} />
          <ImageIcon src={menuIcon} />
        </WraperRight>
      </HeaderContainer>
    </>
  );
}
