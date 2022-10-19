import React, { useContext } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  initializeCountries,
  search,
} from "../features/countries/countriesSlice";

import CountryCard from "./CountryCard";
import {
  Box,
  TextInput,
  Text,
  Spinner,
  Grid,
  ResponsiveContext,
} from "grommet";

import { Search } from "grommet-icons";

const CountriesList = () => {
  const dispatch = useDispatch();
  const countriesList = useSelector((state) => state.countries.countries);
  const loading = useSelector((state) => state.countries.isLoading);
  const searchInput = useSelector((state) => state.countries.search);

  useEffect(() => {
    dispatch(initializeCountries());
  }, [dispatch]);
  console.log(countriesList);

  const searchfunc = (e) => {
    dispatch(search(e.target.value));
  };
  const size = useContext(ResponsiveContext);
  return (
    <div>
      <Box fill align="center" justify="start" pad="large" color={"red"}>
        <Box width="medium" gap="medium">
          <TextInput
            icon={<Search />}
            onChange={searchfunc}
            reverse
            placeholder="search ..."
            color={"red"}
          />
        </Box>
      </Box>
      <Grid columns={size !== "medium" ? "medium" : "100%"} gap="small">
        {!loading ? (
          countriesList &&
          countriesList
            .filter((country) => {
              if (
                country.name.common
                  .toLowerCase()
                  .includes(searchInput.toLowerCase().trim())
              ) {
                return country;
              }
            })
            .map((country) => {
              return (
                <CountryCard key={country.name.common} country={country} />
              );
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

export default CountriesList;
