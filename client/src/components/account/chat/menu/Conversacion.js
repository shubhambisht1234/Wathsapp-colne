import React, { useState } from "react";
import { useEffect } from "react";
import { getUsers } from "../../../../service/Api";
import { Box, styled } from "@mui/material";
import AvatarComponent from "../../../../genericComponent/Avatar";

const UserList = styled(Box)`
  margin-top: 10px;
`;
const Container = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const TitleContainer = styled(Box)`
  padding: 0px 10px;
`;
const Wrapper = styled(Box)`
  height: 50px;
  width: 350px;
  display: flex;
  align-items: center;
`;

const HeaderText = styled(Box)``;
const TitleText = styled(Box)`
  font-size: 12px;
  color: #667985;
`;
export default function Conversacion({ setChatListOpen }) {
  const [user, setUser] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      let response = await getUsers();
      console.log(response, "response");
      setUser(response);
    };
    fetchData();
  }, []);
  const HandleOpenChat = (items) => {
    const item = { condition: true, userData: items };
    setChatListOpen(item);
  };
  // console.log(user, "user");
  return (
    <>
      <UserList>
        {user?.map((items) => {
          return (
            <Container onClick={() => HandleOpenChat(items)}>
              <Wrapper>
                <AvatarComponent src={items?.picture} />
                <TitleContainer>
                  <HeaderText>{items?.name}</HeaderText>
                  <TitleText> shubham hello kessa ho</TitleText>
                </TitleContainer>
              </Wrapper>
            </Container>
          );
        })}
      </UserList>
    </>
  );
}
