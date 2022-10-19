import React, { useEffect, useState, useContext } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

import {
  Box,
  Text,
  Grommet,
  Image,
  Grid,
  ResponsiveContext,
  Button,
} from "grommet";

const SingleCountry = () => {
  let location = useLocation();
  const { latlng, name, capital, country } = location.state;
  const [weather, setWeather] = useState(null);
  const size = useContext(ResponsiveContext);

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latlng[0]}&lon=${latlng[1]}&units=metric&APPID=541aece78bd35a3a6081afb94884efc2`
      )
      .catch((error) => console.log(error))
      .then((res) => {
        setWeather(res.data);
      });
  }, [latlng]);

  return (
    <Grommet style={{ margin: "2rem" }}>
      <Grid
        columns={size !== "medium" ? "medium" : "100%"}
        gap="large"
        align="center"
      >
        <Text style={{ fontSize: "30px", margin: "auto" }}>{capital}</Text>
        <Image
          alt="capital city"
          style={{
            height: "14rem",
            width: "28rem",
            borderRadius: "9px",
            margin: "auto",
          }}
          src={`https://source.unsplash.com/featured/1600x900?${capital}`}
          fluid
        />
        <Box pad="large">
          <Text style={{ display: "inline - block" }}>
            <Text>Weather</Text>{" "}
            <Text style={{ float: "right" }}>
              {weather && weather.main.temp}
            </Text>
          </Text>
          <Text>
            {" "}
            <hr />
          </Text>
          <Text style={{ display: "inline - block" }}>
            <Text>Wind speed</Text>{" "}
            <Text style={{ float: "right" }}>
              {weather && weather.wind.speed}
            </Text>
          </Text>
          <Text>
            {" "}
            <hr />
          </Text>
          <Text style={{ display: "inline - block" }}>
            <Text>Feels</Text>{" "}
            <Text style={{ float: "right" }}>
              {weather && weather.main.feels_like}
            </Text>
          </Text>
          <Text>
            {" "}
            <hr />
          </Text>
          <Text style={{ display: "inline - block" }}>
            <Text>Humidity</Text>{" "}
            <Text style={{ float: "right" }}>
              {weather && weather.main.humidity}
            </Text>
          </Text>
          <Text>
            {" "}
            <hr />
          </Text>
        </Box>
      </Grid>
      <Box pad="large" background={"white"} fill align="end">
        <Text size="medium"></Text>
      </Box>
      <Box pad="small" background={"white"} fill align="end">
        <Text size="medium"></Text>
      </Box>
      <Box pad="large" background={"white"} fill align="end">
        <Text size="medium"></Text>
      </Box>
      <Link to={{ pathname: `/countriesList` }} state={{ country }}>
        <Button variant="primary" style={{ color: "#c63e55" }}>
          Back to Countries
        </Button>
      </Link>
    </Grommet>
  );
};

export default SingleCountry;
