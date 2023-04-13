import React, { useEffect } from "react";
import LoginDialog from "./account/loginDialog";
import { AppBar, Box, Toolbar, Typography, styled } from "@mui/material";
import { useContext } from "react";
import { AccountContext } from "./context/acountProvider";
import ChatDialog from "./account/chat/chatDialog";
import WathsappIcon from "../assets/images/WathsappIcon.svg";
const Component = styled(Box)`
  height: 100vh;
  background: #dcdcdc;
`;
const Header = styled(AppBar)`
  height: 230px;
  background: #00a884;
  box-shadow: none;
`;
const WathsappTitle = styled(Box)`
  // background: red;
  width: 200px;
  display: flex;
  align-items: center;
  justyfy-content: space-arround;
  margin-left: 130px;
  margin-top: 30px;
`;
const Image = styled("img")({
  width: "50px",
  marginRight: "10px",
});
export default function Messanger() {
  const { account } = useContext(AccountContext);
  return (
    <>
      <Component>
        {account ? (
          <>
            <Header>
              <Toolbar></Toolbar>
              <ChatDialog />
            </Header>
          </>
        ) : (
          <>
            <Header>
              <WathsappTitle>
                <Image src={WathsappIcon} />
                <Typography>{"Wathsapp Web".toUpperCase()}</Typography>
              </WathsappTitle>
              <Toolbar></Toolbar>
              <LoginDialog />
            </Header>
          </>
        )}
      </Component>
    </>
  );
}
