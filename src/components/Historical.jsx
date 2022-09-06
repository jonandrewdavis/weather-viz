import { useColorMode } from "@chakra-ui/react";
import chroma from "chroma-js";
import React, { useMemo } from "react";
import UplotReact from "uplot-react";
import "uplot/dist/uPlot.min.css";

import dullesJSON from "../assets/dulles.json";
import laxJSON from "../assets/lax.json";
import { formatHistorical } from "../services/utils";

const options = {
  title: "Historical Temp (Max)",
  id: "chart1",
  class: "historical-temp",
  height: 600,
};

const Historical = ({ width }) => {
  const { colorMode } = useColorMode();

  const [seriesLabel, series] = useMemo(
    () =>
      formatHistorical(
        [dullesJSON, laxJSON],
        [...new Array(2)].map(() => chroma.random()),
        ["Dulles", "LAX"]
      ),
    [dullesJSON]
  );

  return (
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
            label: "Temperature Max (°F)",
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
  );
};

export default Historical;
