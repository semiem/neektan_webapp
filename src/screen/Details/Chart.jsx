import React from "react";
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Scatter } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

export const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

const chartData = [
  { x: 1000, y: 500 },
  { x: 400, y: 1500 },
  { x: 100, y: 2000 },
  { x: 1400, y: 2500 },
  { x: 700, y: 4000 },
  { x: 900, y: 500 },
];

export const data = {
  datasets: [
    {
      label: "",
      data: chartData,
      backgroundColor: "#4298fa",
    },
  ],
};

function Chart() {
  return <Scatter options={options} data={data} />;
}

export default Chart;
