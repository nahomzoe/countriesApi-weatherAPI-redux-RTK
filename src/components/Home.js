import React from "react";
import getAll from "../services/favorites";

import { Box, CheckBox, Text, WorldMap } from "grommet";

const placeProps = (name, color, showDrop) => ({
  name,
  color,
  ...(showDrop
    ? {
        content: (
          <Box pad={{ horizontal: "small", vertical: "xsmall" }}>
            <Text>{name}</Text>
          </Box>
        ),
        dropProps: {
          align: { left: "right" },
          background: { color, opacity: "strong" },
          elevation: "medium",
          margin: { left: "small" },
          round: "xsmall",
        },
      }
    : {}),
});

const Home = () => {
  const favorites = getAll();
  const [showDrops, setShowDrops] = React.useState(true);
  const mappedFavs = favorites.map((fav) => {
    return {
      location: [fav.latlng[0], fav.latlng[1]],
      ...placeProps(fav.capital, "graph-1", showDrops),
    };
  });
  return (
    <Box align="center" pad="large" margin="0">
      <CheckBox
        label="I have been here"
        checked={showDrops}
        onChange={() => setShowDrops(!showDrops)}
      />
      <WorldMap places={mappedFavs} />
    </Box>
  );
};

export default Home;
