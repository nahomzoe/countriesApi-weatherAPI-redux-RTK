import React, { useContext } from "react";
import { useSelector } from "react-redux";
import CountryCard from "./CountryCard";
import { Box, Text, Spinner, Grid, ResponsiveContext } from "grommet";

const FavList = () => {
  const favoritesList = useSelector((state) => state.favorites.favorites);
  const loading = useSelector((state) => state.favorites.isLoading);
  const size = useContext(ResponsiveContext);

  console.log(favoritesList);

  return (
    <div>
      <Grid columns={size !== "medium" ? "medium" : "100%"} gap="small">
        {!loading ? (
          favoritesList &&
          favoritesList.map((country) => {
            return <CountryCard key={country.name.common} country={country} />;
          })
        ) : (
          <Box align="center" direction="row" gap="small">
            <Spinner
              border={[
                { side: "horizontal", color: "#c63e55", size: "medium" },
              ]}
            />
            <Text>Loading...</Text>
          </Box>
        )}
      </Grid>
    </div>
  );
};

export default FavList;
