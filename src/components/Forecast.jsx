import { useColorMode } from "@chakra-ui/react";
import chroma from "chroma-js";
import React, { useMemo } from "react";
import UplotReact from "uplot-react";
import "uplot/dist/uPlot.min.css";

// TODO: When adding additional locations, include them as a QueryKey: https://tanstack.com/query/v4/docs/guides/query-keys
// TODO: Unit switch, imperial/standard
// TODO: high/low bands

import { formatForecast } from "../services/utils";

const options = {
  title: "5-Day, 3h Forecast",
  id: "chart2",
  class: "weather-forecast",
  height: 600,
};

const Forecast = ({ forecastData, width, locations }) => {
  const { colorMode } = useColorMode();

  const [seriesLabel, series] = useMemo(() => {
    const generateColors = [...new Array(forecastData.length)].map(() =>
      chroma.random()
    );
    return formatForecast(forecastData, generateColors);
  }, [locations]);

  return (
    <div>
      <UplotReact
        options={{
          ...options,
          width: width,
          series: [{}, ...seriesLabel],
          axes: [
            {
              stroke: colorMode === "light" ? "#000" : "#fff",
              font: "14px Arial",
            },
            {
              label: "Temperature Average (°F)",
              labelSize: 30,
              labelFont: "18px Arial",
              font: "14px Arial",
              stroke: colorMode === "light" ? "#000" : "#fff",
            },
          ],
        }}
        data={series}
        onCreate={(chart) => {}}
        onDelete={(chart) => {}}
      />
    </div>
  );
};

export default Forecast;
