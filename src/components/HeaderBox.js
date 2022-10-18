import React from "react";

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
  return (
    // Uncomment <Grommet> lines when using outside of storybook
    <Grommet>
      <Header background="#fafafd" pad="medium" height="xsmall">
        <Anchor
          href="https://tools.grommet.io/"
          icon={<GrommetIcon color="#040404" />}
          label="Countries API"
          color="#c63e55"
        />
        <ResponsiveContext.Consumer>
          {(size) =>
            size === "small" ? (
              <Box justify="end">
                <Menu
                  a11yTitle="Navigation Menu"
                  dropProps={{ align: { top: "bottom", right: "right" } }}
                  icon={<MenuIcon color="brand" />}
                  items={[
                    {
                      label: <Box pad="small">Home</Box>,
                      href: "https://v2.grommet.io/",
                    },
                    {
                      label: <Box pad="small">Countries</Box>,
                      href: "https://github.com/grommet/grommet/issues",
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
                      href: "https://github.com/grommet/grommet/issues",
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
                  <Box background="orange" pad={{ horizontal: "xsmall" }} round>
                    <Text size="small">4</Text>
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
