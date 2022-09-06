import {
  Box,
  Button,
  ButtonGroup,
  Divider,
  Flex,
  Heading,
  Link,
  SimpleGrid,
  Spacer,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/react";
import { useQueries } from "@tanstack/react-query";
import React, { useState } from "react";
import "uplot/dist/uPlot.min.css";

import { fetchWeather } from "../services/api";
import { LOC_DULLES, LOC_LAX, STATIC_PAGE_WIDTH } from "../services/constants";

import About from "./About";
import Forecast from "./Forecast";
import Historical from "./Historical";
import Loading from "./Loading";

const WeatherGraphs = ({ locations }) => {
  const locationQueries = useQueries({
    queries: locations.map((loc) => {
      return {
        queryKey: ["fetchWeatherByLocation", loc.label],
        queryFn: () => fetchWeather(loc),
      };
    }),
  });

  if (locationQueries.some(({ isLoading }) => isLoading === true)) {
    return <Loading></Loading>;
  }

  if (locationQueries.some(({ data: { cod } }) => cod === 401)) {
    return (
      <Heading size="sm" color={"red.500"} p={10}>
        Weather queries failed with 401. Tip: You may not have included an API
        key in your .env.
      </Heading>
    );
  }

  return (
    <SimpleGrid columns={2} spacing={10} p={12}>
      <Historical width={STATIC_PAGE_WIDTH / 2} />
      <Forecast
        forecastData={locationQueries}
        locations={locations}
        width={STATIC_PAGE_WIDTH / 2}
      />
    </SimpleGrid>
  );
};

// TODO: state for searching up coordinates, and adding locations beyond `LOC_DULLES, LOC_LAX`
const MainPage = () => {
  const finalRef = React.useRef(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const [locations, setLocations] = useState([LOC_DULLES, LOC_LAX]);

  return (
    <Box ref={finalRef}>
      <header>
        <Flex
          minWidth="max-content"
          alignItems="center"
          gap="2"
          pl={12}
          pr={12}
        >
          <Flex p="8">
            <Heading size="lg">Weather Viz</Heading>
          </Flex>
          <Spacer />
          <ButtonGroup gap="2">
            <Button colorScheme="teal" onClick={onOpen}>
              About
            </Button>
            <Link
              href="https://github.com/jonandrewdavis/weather-viz"
              isExternal
            >
              <Button colorScheme="teal">Source</Button>
            </Link>
            <Button onClick={toggleColorMode}>
              Toggle {colorMode === "light" ? "🌑" : "☀"}
            </Button>
          </ButtonGroup>
        </Flex>
      </header>
      <Divider></Divider>
      <WeatherGraphs locations={locations} />
      <About isOpen={isOpen} onClose={onClose} finalRef={finalRef} />
    </Box>
  );
};

export default MainPage;
