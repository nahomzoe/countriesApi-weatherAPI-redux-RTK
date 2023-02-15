import React from "react";
import { Outlet } from "react-router-dom";
import { Box, Header, Main, Text } from "grommet";

const MainBox = () => {
  return (
    <Box>
      <Main style={{ marginTop: "8rem" }}>
        <Outlet />
        <Header
          background="light-4"
          pad="small"
          style={{
            background: "black",
            position: "fixed",
            bottom: 70,
            width: "100%",
            zIndex: 50,
          }}
        >
          <Text size="small" style={{ color: "white" }}>
            {" "}
            "The earth is what we all have in common.” —Wendell Berry
          </Text>
        </Header>
      </Main>
    </Box>
  );
};

export default MainBox;
