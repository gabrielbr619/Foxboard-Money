import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { ReactElement } from "react";

export function ChartLine(): ReactElement {
  const options = {
    plotOptions: {
      series: {
        lineWidth: 5,
        marker: {
          enabled: true,
          symbol: "circle",
          radius: 7,
        },
      },
    },
    chart: {
      height: 260,
      borderRadius: 20,
      border: "none",
      backgroundColor: "#447FC3",
      color: "white",
    },
    title: {
      text: "My chart",
      style: {
        color: "#fff",
      },
    },
    yAxis: {
      title: {
        enabled: false,
      },
      labels: {
        style: {
          color: "#fff",
        },
      },
    },
    xAxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      labels: {
        style: {
          color: "#fff",
        },
      },
    },
    series: [
      {
        data: [2000, 2000, 1500, 2000, 2000, 1500],
        name: "Entradas",
        color: "#30BB3E",
      },
      {
        data: [500, 300, 1500, 1200, 400, 220],
        name: "Saídas",
        color: "#C43535",
      },
    ],
    legend: {
      itemStyle: {
        color: "white",
      },
    },
  };
  return <HighchartsReact highcharts={Highcharts} options={options} />;
}

export function ChartPie(): ReactElement {
  const options = {
    plotOptions: {
      series: {
        lineWidth: 5,
        marker: {
          enabled: true,
          symbol: "circle",
          radius: 7,
        },
      },
    },
    chart: {
      type: "pie",
      height: 260,
      borderRadius: 20,
      border: "none",
      backgroundColor: "#447FC3",
      color: "white",
    },
    title: {
      text: "My chart",
      style: {
        color: "#fff",
      },
    },
    yAxis: {
      title: {
        enabled: false,
      },
      labels: {
        style: {
          color: "#fff",
        },
      },
    },
    xAxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      labels: {
        style: {
          color: "#fff",
        },
      },
    },
    series: [
      {
        name: "",
        y: 98,
        name: "Entradas",
        color: "#30BB3E",
      },
      {
        y: 2,
        name: "Saídas",
        color: "#C43535",
      },
    ],
    legend: {
      itemStyle: {
        color: "white",
      },
    },
  };
  return <HighchartsReact highcharts={Highcharts} options={options} />;
}
