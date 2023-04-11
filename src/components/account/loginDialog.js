import { Box, Dialog, List, ListItem, Typography, styled } from "@mui/material";
import React, { useContext } from "react";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
// import { AccountContext } from "../context/acountProvider";
const Component = styled(Box)`
  display: flex;
`;
const Container = styled(Box)`
  padding: 56px 0px 56px 56px;
`;
const QRCode = styled("img")({
  height: "264px",
  width: "264px",
  padding: "56px 0px ",
});
const dialogStyle = {
  height: "96%",
  marginTop: "12%",
  width: "60%",
  maxWidth: "100%",
  maxHeight: "100%",
  boxShadow: "none",
  overFlow: "none",
};
const Title = styled(Typography)`
  font-size: 28px;
  font-weight: 300;
  line-height: normal;
  color: #41525d;
`;
const Item = styled(ListItem)`
  font-size: 18px;
  line-height: 28px;
  color: var(--gray-700);
`;
export default function LoginDialog() {
  //   const { setAccount } = useContext(AccountContext);
  const onLoginSucess = (res) => {
    const decode = jwt_decode(res?.credential, "sucessfull");
    console.log(decode);
    // setAccount(decode);
  };
  const onError = (res) => {
    console.log(res, "error");
  };
  return (
    <>
      <Dialog open={true} PaperProps={{ sx: dialogStyle }} hideBackdrop={true}>
        <Component>
          <Container>
            <Title>Use WhatsApp on your computer :</Title>
            <List>
              <Item>1. Open WhatsApp on your phone</Item>
              <Item>2. Tab Manue Setting and select Wathsapp Web</Item>
              <Item>
                3. Point your phone to this screen to capture the QR code
              </Item>
            </List>
          </Container>
          <Box style={{ position: "relative" }}>
            <QRCode src="https://i.stack.imgur.com/WqIWW.jpg" />
            <Box style={{ position: "absolute", top: "166px", left: "15px" }}>
              <GoogleLogin onSuccess={onLoginSucess} onError={onError} />
            </Box>
          </Box>
        </Component>
      </Dialog>
    </>
  );
}
