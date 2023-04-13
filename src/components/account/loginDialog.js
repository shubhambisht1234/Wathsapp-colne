import { Box, Dialog, List, ListItem, Typography, styled } from "@mui/material";
import React, { useContext } from "react";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import WathsappIcon from "../../assets/images/WathsappIcon.svg";
import { ariaHidden } from "@mui/material/Modal";
import { AccountContext } from "../context/acountProvider";
const Component = styled(Box)`
  display: flex;
  justify-content: space-around;
`;
const Container = styled(Box)`
  padding: 60px 5px;
`;
const QRCode = styled("img")({
  height: "264px",
  width: "264px",
  padding: "56px 0px ",
});
const dialogStyle = {
  height: "100%",
  marginTop: "13%",
  width: "80%",
  maxWidth: "100%",
  // maxHeight: "100%",
  boxShadow: "none",
  overFlow: "none",
};
const Title = styled(Typography)`
  font-size: 30px;
  line-height: normal;
  font-family: inherit;
  font-weight: 10;
  color: #41525d;
`;
const Item = styled(ListItem)`
  font-size: 18px;
  line-height: 28px;
  color: var(--gray-700);
`;
const Image = styled("img")({
  width: "100px",
  marginTop: "200px",
});
const TitleList = styled(List)`
  margin-left: -10px;
  padding: 43px 0px;
`;
const StrongText = styled(Typography)`
  padding: 0px 4px;
  font-size: 20px;
  color: #3b4a54;
  font-family: inherit;
  font-weight: 500;
`;
const FutterVideo = styled(Box)`
  // height: 100%;
  // background: red;
  padding: 70px;
`;
export default function LoginDialog() {
  const { setAcount } = useContext(AccountContext);
  const onLoginSucess = (res) => {
    const decode = jwt_decode(res?.credential, "sucessfull");
    setAcount(decode);
  };
  const onError = (res) => {
    console.log(res, "error");
  };
  return (
    <>
      <Dialog open={true} PaperProps={{ sx: dialogStyle }} hideBackdrop={true}>
        <Component>
          <Container>
            <Title>Use WhatsApp on your computer </Title>
            <TitleList>
              <Item>1. Open WhatsApp on your phone</Item>
              <Item>
                2. Tab <StrongText> Menu </StrongText> or{" "}
                <StrongText>Setting</StrongText> and select{" "}
                <StrongText>Linked Devices</StrongText>
              </Item>
              <Item>
                4. Tab on <StrongText>Linked a Devices</StrongText>
              </Item>
              <Item>
                3. Point your phone to this screen to capture the QR code
              </Item>
            </TitleList>
          </Container>
          <Box style={{ position: "relative" }}>
            <QRCode src="https://i.stack.imgur.com/WqIWW.jpg" />
            <Box style={{ position: "absolute", top: "166px", left: "15px" }}>
              <GoogleLogin onSuccess={onLoginSucess} onError={onError} />
            </Box>
          </Box>
        </Component>
        <FutterVideo></FutterVideo>
      </Dialog>
    </>
  );
}
