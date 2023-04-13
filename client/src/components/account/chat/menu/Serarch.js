import styled from "@emotion/styled";
import { Box, InputBase, TextField } from "@mui/material";
import React from "react";
import { Search as SearchIcon } from "@mui/icons-material";
import FilterListIcon from "@mui/icons-material/FilterList";
export default function Serarch() {
  const Container = styled(Box)`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-top: 6px;
  `;

  const Icon = styled(Box)`
    width: 60px;
    padding: 3px 6px;
  `;
  const Wrapper = styled(Box)`
    padding: 2px 10px;
    background: #f0f2f5;
    width: 80%;
    // margin: 6px auto;
    display: flex;
    align-items: center;
    border-radius: 10px;
  `;
  return (
    <>
      <Container>
        <Wrapper>
          <Icon>
            <SearchIcon />
          </Icon>
          <InputBase placeholder="Search or start new chat" />
        </Wrapper>
        <Box>
          <FilterListIcon />
        </Box>
      </Container>
    </>
  );
}
