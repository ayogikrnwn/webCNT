import React, { Component } from "react";
import Chart from "react-apexcharts";
import { ContextReact } from "../../context/store";

const App = () => {
  const context = React.useContext(ContextReact);

  const { dataCalon } = context.data;
  const getCOunt = (namaCalon) => {
    return dataCalon[namaCalon].total;
  };

  const defaultData = [
    getCOunt("calon1"),
    getCOunt("calon2"),
    getCOunt("calon3"),
    getCOunt("calon4"),
    getCOunt("tidakSah"),
  ];
  const [before, setBefore] = React.useState(0);
  const color = ["#D21414", "#6FD91C", "#1C2FD9", "#D9D11C", "#080808"];
  const getIndex = (value) => {
    setBefore(before + 1);
    if (before < color.length) {
      return color[before + 1];
    }
  };

  const newState = {
    series: [
      {
        data: defaultData,
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "bar",
        events: {
          click: function (chart, w, e) {
            // console.log(chart, w, e)
          },
        },
      },
      colors: color,
      plotOptions: {
        bar: {
          columnWidth: "45%",
          distributed: true,
        },
      },
      // dataLabels: {
      //   enabled: false,
      // },
      legend: {
        show: false,
      },
      xaxis: {
        categories: [
          ["calon 1"],
          ["calon 2"],
          ["calon 3"],
          ["calon 4"],
          ["tidak sah"],
        ],
        labels: {
          style: {
            colors: color,
            fontSize: "12px",
          },
        },
      },
    },
  };

  return (
    <Chart options={newState.options} series={newState.series} type="bar" />
  );
};

export default App;
