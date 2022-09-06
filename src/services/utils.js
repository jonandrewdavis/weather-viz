import uPlot from "uplot";

// https://github.com/leeoniya/uPlot/tree/master/docs#data-format

// TODO: The two functions in this file return identical type signatures from two differring sources.
// Define an abstraction layer to identify internal values for iteration and collation to enable one interface / function to cover both, or potenitally any usecases.

// Takes Forecasts[], Colors[];
// Return [seriesLabels[], number[]];
const formatForecast = (forecastData, seriesColors) => {
  const seriesLabels = [];
  const series = [];
  forecastData.forEach(({ data }, index) => {
    const { list, city } = data;
    const timeColumn = [];
    const seriesColumn = [];

    list.forEach(({ dt, main: { temp } }) => {
      if (index === 0) {
        timeColumn.push(dt);
      }
      seriesColumn.push(temp);
    });

    if (index === 0) {
      series.push(timeColumn);
      series.push(seriesColumn);
    } else {
      series.push(seriesColumn);
    }

    seriesLabels.push({
      label: `${city.name} - Avg Temp`,
      fill: `${seriesColors[index].alpha(0.4).css()}`,
      stroke: `${seriesColors[index].alpha(0.9).css()}`,
      paths: uPlot.paths.spline(),
      value: (self, rawValue) => rawValue.toFixed(2) + " °F",
    });
  });

  return [seriesLabels, series];
};

// Takes History[], Colors[], string[];
// Return [seriesLabels[], number[]];
const formatHistorical = (historicalData, seriesColors, names) => {
  const seriesLabels = [];
  const series = [];

  historicalData.forEach(({ meta, data }, index) => {
    const tempTime = [];
    const tempSeries = [];
    data.forEach(({ date, tmax }) => {
      if (index === 0) {
        tempTime.push(Date.parse(date) / 1000);
      }
      tempSeries.push(tmax);
    });

    if (index === 0) {
      series.push(tempTime);
      series.push(tempSeries);
    } else {
      series.push(tempSeries);
    }

    seriesLabels.push({
      label: `${names[index]} - Max Temp`,
      fill: `${seriesColors[index].alpha(0.4).css()}`,
      stroke: `${seriesColors[index].alpha(0.9).css()}`,
      paths: uPlot.paths.spline(),
      value: (self, rawValue) => rawValue.toFixed(2) + " °F",
    });
  });

  return [seriesLabels, series];
};

export { formatForecast, formatHistorical };
