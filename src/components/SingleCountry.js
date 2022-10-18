import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

import { Box, Distribution, Text, Grommet, Image } from "grommet";

// import { Box, Card, Image, Text, CardBody, Heading, Button } from "grommet";
// import { Columns } from "grommet-icons";
// import { Link } from "react-router-dom";
// import ListGroup from "react-bootstrap/ListGroup";

const SingleCountry = () => {
  let location = useLocation();
  const { latlng, name, capital } = location.state;
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latlng[0]}&lon=${latlng[1]}&units=metric&APPID=541aece78bd35a3a6081afb94884efc2`
      )
      .catch((error) => console.log(error))
      .then((res) => {
        console.log(res.data);
        setWeather(res.data);
      });
  }, [latlng]);

  return (
    // Uncomment <Grommet> lines when using outside of storybook
    <Grommet style={{ margin: "2rem" }}>
      <Distribution
        fill
        values={[
          {
            value: 50,
            color: "light-3",
          },
          { value: 30, color: "neutral-1" },

          { value: 20, color: "brand" },
          { value: 20, color: "brand" },
        ]}
      >
        {(value) => (
          <Box pad="xsmall" background={value.color} fill>
            <Text size="large">{value.value}</Text>
          </Box>
        )}
      </Distribution>
    </Grommet>
  );
  // // <CardBody style={{ marginTop: "10rem", marginBottom: "10rem" }}>
  // //   <Card style={{ maxWidth: "1200px", margin: "auto" }}>
  // //     <Image
  // //       alt="capital city"
  // //       style={{
  // //         height: "20rem",
  // //         width: "35rem",
  // //         borderRadius: "9px",
  // //       }}
  // //       src={`https://source.unsplash.com/featured/1600x900?${capital}`}
  // //       fluid
  // //     />
  // {
  //   /*
  //       <ListGroup variant="flush">
  //         <ListGroup.Item>Cras justo odio</ListGroup.Item>
  //         <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
  //         <ListGroup.Item>Morbi leo risus</ListGroup.Item>
  //         <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
  //       </ListGroup> */
  // }
  // {
  //   /* <Columns md="8">
  //           <CardBody>
  //             <Heading level={3}>{name.common}</Heading>
  //             <Text size="small">
  //               <span className="text-start">Weather</span>
  //               <span className="text-end" style={{ float: "right" }}>
  //                 {weather && weather.main.temp}
  //               </span>
  //             </Text>
  //             <hr />
  //             <Text size="small">
  //               <span className="text-start">Wind speed</span>
  //               <span className="text-end" style={{ float: "right" }}>
  //                 {weather && weather.wind.speed}
  //               </span>
  //             </Text>
  //             <hr />
  //             <Text size="small">
  //               <span className="text-start">Feels</span>
  //               <span className="text-end" style={{ float: "right" }}>
  //                 {weather && weather.main.feels_like}
  //               </span>
  //             </Text>
  //             <hr />
  //             <Text size="small">
  //               <span className="text-start">Humidity</span>
  //               <span className="text-end" style={{ float: "right" }}>
  //                 {weather && weather.main.humidity}
  //               </span>
  //             </Text>

  //             <Text size="small">
  //               <small className="text-muted">Last updated 3 mins ago</small>
  //             </Text>
  //           </CardBody>
  //         </Columns> */
  // }
  // // </Card>

  // {
  //   /* <MDBContainer
  //       className="h-100"
  //       className="vh-20"
  //       style={{ backgroundColor: "white", marginTop: "2rem" }}
  //     >
  //       <MDBRow className="justify-content-center align-items-center h-100">
  //         <MDBCol md="10" lg="8" xl="6">
  //           <MDBCard
  //             className="bg-dark text-white"
  //             style={{ borderRadius: "40px" }}
  //           >
  //             <div className="bg-image" style={{ borderRadius: "35px" }}>
  //               <MDBCardImage
  //                 src="https://images.unsplash.com/photo-1596275281743-e7399c7bdfa9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2824&q=80"
  //                 className="card-img"
  //                 alt="weather"
  //               />
  //               <div
  //                 className="mask"
  //                 style={{ backgroundColor: "rgba(190, 216, 232, .5)" }}
  //               ></div>
  //             </div>
  //             <div className="card-img-overlay text-dark p-5">
  //               <MDBTypography tag="h4" className="mb-0">
  //                 {capital},{name.common}
  //               </MDBTypography>
  //               <div className="display-2 my-3">
  //                 {weather && <h1>Weather : {weather.main.temp}</h1>}
  //               </div>
  //               <p className="mb-2">
  //                 Feels Like: {weather && weather.main.feels_like}
  //               </p>
  //               <MDBTypography tag="h5">
  //                 {weather && weather.weather[0].main}
  //               </MDBTypography>
  //             </div>
  //           </MDBCard>
  //         </MDBCol>
  //       </MDBRow>
  //     </MDBContainer> */
  // }

  // // <Link to={{ pathname: `/countriesList` }} state={{ country }}>
  // //   <Button variant="primary">Countries</Button>
  // // </Link>;
  // // </CardBody>
  // // );
};

export default SingleCountry;
