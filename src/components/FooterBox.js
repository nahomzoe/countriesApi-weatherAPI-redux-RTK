import React from "react";

import {
  Grommet as GrommetIcon,
  FacebookOption,
  Instagram,
  Github,
} from "grommet-icons";

import { Anchor, Box, Footer, Text, Grommet } from "grommet";

const FooterBox = () => {
  return (
    <Grommet>
      <Box>
        <Footer
          background="#000000"
          pad="medium"
          style={{ position: "fixed", bottom: 0, width: "1600px" }}
        >
          <Box align="center" direction="row" gap="xsmall">
            <GrommetIcon color="#040404" size="medium" />
            <Text alignSelf="center" color="#c63e55" size="small">
              Countries App
            </Text>
          </Box>
          <Box direction="row" gap="xxsmall" justify="center">
            <Anchor
              a11yTitle="Share feedback on Github"
              href="https://www.instagram.com/"
              icon={<Instagram color="#fcaf45" />}
            />
            <Anchor
              a11yTitle="Chat with us on Slack"
              href="https://www.facebook.com/"
              icon={<FacebookOption color="#3255d0" />}
            />
            <Anchor
              a11yTitle="Follow us on Twitter"
              href="https://github.com/"
              icon={<Github color="white" />}
            />
          </Box>
          <Text textAlign="center" size="xsmall">
            ©nahom
          </Text>
        </Footer>
      </Box>
    </Grommet>
  );
};
export default FooterBox;
