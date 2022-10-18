import React, { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";
// import axios from "axios";
// import { Box, Card, Image, Button } from "grommet";

const SingleCountry = () => {
  // let location = useLocation();
  // const { latlng, name, capital, country } = location.state;
  // const [weather, setWeather] = useState(null);

  // useEffect(() => {
  //   axios
  //     .get(
  //       `https://api.openweathermap.org/data/2.5/weather?lat=${latlng[0]}&lon=${latlng[1]}&units=metric&APPID=541aece78bd35a3a6081afb94884efc2`
  //     )
  //     .catch((error) => console.log(error))
  //     .then((res) => {
  //       console.log(res.data);
  //       setWeather(res.data);
  //     });
  // }, [latlng]);

  return (
    <div>
      <h1>sinngle page</h1>
      {/* <Card
        direction="row"
        title={capital}
        // level={2}
        // pretitle={pretitle}
        // subtitle={subtitle}
        media={
          <Box width="small">
            <Image
              src={`https://source.unsplash.com/featured/1600x900?${capital}`}
              alt="capital city"
            />
          </Box>
        }
        // description={description}
        onClick={() => {}}
      /> */}
    </div>
  );
};

export default SingleCountry;
