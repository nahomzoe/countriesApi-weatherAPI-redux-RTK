import React from "react";
import getAll from "../services/favorites";

import {
  Anchor,
  Box,
  Header,
  Menu,
  ResponsiveContext,
  Grommet,
  Stack,
  Text,
} from "grommet";
import { Grommet as GrommetIcon, Menu as MenuIcon } from "grommet-icons";

const HeaderBox = () => {
  const favorites = getAll();
  return (
    <Grommet>
      <Header
        background="#000000"
        pad="medium"
        height="xsmall"
        style={{
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: "100",
        }}
      >
        <Anchor
          href="/"
          icon={<GrommetIcon color="#040404" />}
          label="Countries API"
          color="#c63e55"
        />
        <ResponsiveContext.Consumer>
          {(size) =>
            size === "small" ? (
              <Box justify="end" style={{ position: "sticky", top: "5rem" }}>
                <Menu
                  a11yTitle="Navigation Menu"
                  dropProps={{
                    align: { top: "bottom", right: "right" },
                  }}
                  icon={<MenuIcon color="brand" />}
                  items={[
                    {
                      label: <Box pad="small">Home</Box>,
                      href: "/",
                    },
                    {
                      label: <Box pad="small">Countries</Box>,
                      href: "/countriesList",
                    },
                    {
                      label: (
                        <Box
                          pad="small"
                          a11yTitle="2 Available Updates"
                          badge={2}
                        >
                          Favorites
                        </Box>
                      ),
                      href: "/favList",
                    },
                  ]}
                />
              </Box>
            ) : (
              <Box justify="end" direction="row" gap="medium">
                <Anchor href="/" label="Home" color="#c63e55" />
                <Anchor
                  href="/countriesList"
                  label="Countries"
                  color="#c63e55"
                />
                <Anchor href="/favList" label="Favorites" color="#c63e55" />
                <Stack anchor="top-right">
                  <Box background="white" pad={{ horizontal: "large" }} round>
                    <Text size="small">{favorites.length}</Text>
                  </Box>
                </Stack>
              </Box>
            )
          }
        </ResponsiveContext.Consumer>
      </Header>
    </Grommet>
  );
};

export default HeaderBox;
