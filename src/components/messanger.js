import React from "react";
import LoginDialog from "./account/loginDialog";
import { AppBar, Box, Toolbar, styled } from "@mui/material";
import { useContext } from "react";
import { AccountContext } from "./context/acountProvider";
import ChatDialog from "./account/chat/chatDialog";
const Component = styled(Box)`
  height: 100vh;
  background: #dcdcdc;
`;
const Header = styled(AppBar)`
  height: 125px;
  background: #128c7e;
  box-shadow: none;
`;
export default function Messanger() {
  const { account } = useContext(AccountContext);
  console.log(account, "acount.....");
  return (
    <>
      <Component>
        {account ? (
          <>
            <Header>
              <Toolbar></Toolbar>
            </Header>
            <ChatDialog />
          </>
        ) : (
          <>
            <Header>
              <Toolbar></Toolbar>
            </Header>

            <LoginDialog />
          </>
        )}
      </Component>
    </>
  );
}
