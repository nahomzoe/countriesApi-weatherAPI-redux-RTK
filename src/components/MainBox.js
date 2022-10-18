import React from "react";
import { Outlet } from "react-router-dom";
import { Box, Header, Main, Text } from "grommet";

const MainBox = () => {
  return (
    <Box>
      <Main>
        <Header background="light-4" pad="small">
          <Text size="small">
            {" "}
            "The earth is what we all have in common.” —Wendell Berry
          </Text>
        </Header>
        <Outlet />
      </Main>
    </Box>
  );
};

export default MainBox;
