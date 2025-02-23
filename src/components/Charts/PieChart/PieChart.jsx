import React, { useEffect, useRef } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
// import Highcharts3D from "highcharts/highcharts-3d";

// if (typeof Highcharts === "object") {
//   Highcharts3D(Highcharts);
// }
const PieChart = ({
  data = [
    { name: "Australia", y: 30, color: "#7086FD" },
    { name: "France", y: 20, color: "#6FD195" },
    { name: "Canada", y: 10, color: "#FFAE4C" },
    { name: "Other", y: 5, color: "#07DBFA" },
  ],
}) => {
  const chartRef = useRef(null);

  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     import("highcharts/highcharts-3d").then((module) => {
  //       module?.default(Highcharts); // Enable Highcharts 3D
  //     });
  //   }
  // }, []);

  const options = {
    chart: {
      type: "pie",
      backgroundColor: "transparent",
      options3d: {
        enabled: true,
        alpha: 45,
        beta: 0,
      },
    },
    title: {
      text: null,
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: "pointer",
        depth: 35,
        dataLabels: {
          enabled: true,
          useHTML: true,
          format:
            '<span style="color:{point.color}; font-weight: bold; font-size: 16px;">{point.y}%</span><br><span style="color: #333; font-size: 14px;">{point.name}</span>',
          connectorColor: "#ccc",
        },
      },
    },
    credits: {
      enabled: false,
    },
    series: [
      {
        type: "pie",
        name: "Share",
        data: data,
      },
    ],
  };

  return (
    <div className="w-full h-full">
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
        ref={chartRef}
      />
    </div>
  );
};

export default PieChart;
