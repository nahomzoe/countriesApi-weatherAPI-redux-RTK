import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../features/favorites/favoritesSlice";
import { removeItem } from "../features/favorites/favoritesSlice";
import {
  Box,
  Card,
  Text,
  CardFooter,
  CardHeader,
  Grommet,
  Button,
  Image,
  Anchor,
  List,
  Paragraph,
} from "grommet";
import { Like, Undo } from "grommet-icons";

const data = [];

for (let i = 0; i < 1; i += 1) {
  data.push({});
}

const CountryCard = ({ country }) => {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);
  const favoritesList = useSelector((state) => state.favorites.favorites);

  useEffect(() => {
    setChecked();
  }, [checked]);

  const { name, languages, population, cca3, flags } = country;

  const isFav = favoritesList.find((item) => item.cca3 === country.cca3);
  return (
    <Grommet>
      <Box pad="large" gap="medium" width="medium" margin={"auto"}>
        <Card pad="small" gap="medium" align="start">
          <Anchor href="#">
            <Image fit="cover" fill src={flags.png} />
          </Anchor>

          <CardHeader>{name.common}</CardHeader>

          <Box align="center" pad="small">
            <List
              data={data}
              primaryKey={(item) => (
                <Text key={item.entry} size="small" weight="light">
                  Population
                </Text>
              )}
              secondaryKey={(item) => (
                <Text key={item.location} size="small" color="dark-4">
                  {population}
                </Text>
              )}
            />
            <List
              margin={"5px"}
              data={data}
              primaryKey={(item) => (
                <Text key={item.entry} size="small" weight="light">
                  Language
                </Text>
              )}
              secondaryKey={(item) => (
                <Text key={item.location} size="small" color="dark-4">
                  {Object.values(languages || {}).find((language) => (
                    <Text key={language}>
                      <Paragraph>{language[0]} </Paragraph>
                    </Text>
                  ))}
                </Text>
              )}
            />
          </Box>

          <CardFooter>
            <Button
              primary
              size="small"
              color="#c63e55"
              href="#"
              to={{
                pathname: `/countriesList/${cca3}`,
              }}
              state={country}
              variant="primary"
              label="See more"
            />
            {!isFav && (
              <Button
                size="small"
                color="#c63e55"
                checked={checked}
                onChange={(event) => {
                  setChecked(event.target.checked);
                  dispatch(addItem(country));
                }}
                icon={<Like />}
                primary
              />
            )}
            {isFav && (
              <Button
                size="small"
                color="#c63e55"
                checked={!checked}
                onChange={(event) => {
                  setChecked(event.target.checked);
                  dispatch(removeItem(country));
                }}
                icon={<Undo />}
                primary
              />
            )}
          </CardFooter>
        </Card>
      </Box>
    </Grommet>
  );
};

export default CountryCard;
