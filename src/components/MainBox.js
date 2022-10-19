import React from "react";
import { Outlet } from "react-router-dom";
import { Box, Header, Main, Text } from "grommet";

const MainBox = () => {
  return (
    <Box>
      <Main style={{ marginTop: "6rem" }}>
        <Header
          background="light-4"
          pad="small"
          style={{
            background: "#000000",
            position: "fixed",
            top: 90,
            width: "1600px",
          }}
        >
          <Text size="small" style={{ color: "white" }}>
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
