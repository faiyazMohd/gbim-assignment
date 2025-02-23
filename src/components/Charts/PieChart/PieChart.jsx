// import React from "react";
// import Highcharts from "highcharts";
// import HighchartsReact from "highcharts-react-official";
// // import Highcharts3D from "highcharts/modules/highcharts-3d";

// // // ✅ Enable Highcharts 3D module
// // Highcharts3D(Highcharts);

// const PieChart = () => {
//   const options = {
//     chart: {
//       type: "pie",
//       backgroundColor: "transparent", // 🔥 Matches the background
//       options3d: {
//         enabled: true,
//         alpha: 45, // 🔥 Adjusted for a better 3D tilt
//         beta: 0,
//         depth: 50, // 🔥 Increased for a deeper look
//         viewDistance: 30, // 🔥 Ensures perspective
//       },
//     },
//     title: {
//       text: "",
//     },
//     plotOptions: {
//       pie: {
//         innerSize: 0,
//         depth: 50,
//         edgeWidth: 2, // 🔥 Makes edges visible
//         dataLabels: {
//           enabled: true,
//           format: "<b style='font-size:18px; color:{point.color}'>{point.y}%</b><br>{point.name}",
//           style: {
//             fontFamily: "Arial, sans-serif",
//             fontWeight: "bold",
//           },
//           connectorColor: "#ccc",
//           distance: 20,
//         },
//       },
//     },
//     series: [
//       {
//         name: "Share",
//         data: [
//           { name: "Australia", y: 30, color: "#40c4ff" }, // Blue
//           { name: "France", y: 20, color: "#4caf50" }, // Green
//           { name: "Canada", y: 10, color: "#ff9800" }, // Orange
//           { name: "Other", y: 5, color: "#f48fb1" }, // Pink
//         ],
//       },
//     ],
//     exporting: {
//       enabled: false, // 🔥 Removes watermark
//     },
//   };

//   return (
//     <div style={{ width: "600px", height: "400px" }}>
//       <HighchartsReact highcharts={Highcharts} options={options} />
//     </div>
//   );
// };

// export default PieChart;

//? using AMCHARTS
// import React, { useLayoutEffect } from "react";
// import * as am5 from "@amcharts/amcharts5";
// import * as am5percent from "@amcharts/amcharts5/percent";

// const PieChart = () => {
//   useLayoutEffect(() => {
//     // Create chart root element
//     let root = am5.Root.new("chartdiv");

//     // ✅ Create Pie Chart
//     let chart = root.container.children.push(
//       am5percent.PieChart.new(root, {
//         layout: root.verticalLayout,
//         innerRadius: am5.percent(0), // Full Pie (not donut)
//       })
//     );

//     // ✅ Enable 3D Effect
//     chart.set("angle", 45);
//     chart.set("depth", 40);

//     // ✅ Define Data
//     let data = [
//       { category: "Australia", value: 30, color: am5.color("#40c4ff") },
//       { category: "France", value: 20, color: am5.color("#4caf50") },
//       { category: "Canada", value: 10, color: am5.color("#ff9800") },
//       { category: "Other", value: 5, color: am5.color("#f48fb1") },
//     ];

//     // ✅ Create Pie Series
//     let series = chart.series.push(
//       am5percent.PieSeries.new(root, {
//         name: "Market Share",
//         categoryField: "category",
//         valueField: "value",
//         fillField: "color",
//       })
//     );

//     // ✅ Set Data
//     series.data.setAll(data);

//     // ✅ Labels & Connectors
//     series.labels.template.setAll({
//       text: "{value}%",
//       fontSize: 20,
//       fontWeight: "bold",
//       fill: am5.color("#000"),
//     });

//     series.slices.template.setAll({
//       stroke: am5.color("#fff"),
//       strokeWidth: 2,
//     });

//     // ✅ Remove AMCharts watermark
//     root._logo.dispose();

//     return () => {
//       root.dispose();
//     };
//   }, []);

//   return <div id="chartdiv" style={{ width: "600px", height: "400px" }}></div>;
// };

// export default PieChart;

//boilercode from the hightcharts code
// import React, { useEffect, useRef } from "react";
// import Highcharts from "highcharts";
// import HighchartsReact from "highcharts-react-official";

// const PieChart = () => {
//   const chartRef = useRef(null);

//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       import("highcharts/highcharts-3d").then((module) => {
//         module.default(Highcharts); // Enable Highcharts 3D
//       });
//     }
//   }, []);

//   const options = {
//     chart: {
//       type: "pie",
//       backgroundColor: "transparent",
//       options3d: {
//         enabled: true,
//         alpha: 45,
//         beta: 0,
//       },
//     },
//     title: {
//       text: null, // No title as per your image
//     },
//     plotOptions: {
//       pie: {
//         allowPointSelect: true,
//         cursor: "pointer",
//         depth: 35,
//         dataLabels: {
//           enabled: true,
//           useHTML: true,
//           format:
//             '<span style="color:{point.color}; font-weight: bold; font-size: 14px;">{point.percentage:.0f}%</span><br><span style="color: #333;">{point.name}</span>',
//           connectorColor: "#ccc",
//         },
//       },
//     },
//     credits: {
//       enabled: false, // Removes Highcharts watermark
//     },
//     series: [
//       {
//         type: "pie",
//         name: "Share",
//         data: [
//           { name: "Australia", y: 30, color: "#40c4ff", dataLabels: { color: "#4058ff" } },
//           { name: "France", y: 20, color: "#4caf50", dataLabels: { color: "#4caf50" } },
//           { name: "Canada", y: 10, color: "#ff9800", dataLabels: { color: "#ff9800" } },
//           { name: "Other", y: 5, color: "#f48fb1", dataLabels: { color: "#40c4ff" } },
//         ],
//       },
//     ],
//   };

//   return (
//     <div style={{ width: "600px", height: "400px" }}>
//       <HighchartsReact highcharts={Highcharts} options={options} ref={chartRef} />
//     </div>
//   );
// };

// export default PieChart;

//

// import React, { useEffect, useRef } from "react";
// import Highcharts from "highcharts";
// import HighchartsReact from "highcharts-react-official";

// const PieChart = () => {
//   const chartRef = useRef(null);

//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       import("highcharts/highcharts-3d").then((module) => {
//         module.default(Highcharts); // Enable Highcharts 3D
//       });
//     }
//   }, []);

//   const options = {
//     chart: {
//       type: "pie",
//       backgroundColor: "transparent",
//       options3d: {
//         enabled: true,
//         alpha: 45,
//         beta: 0,
//       },
//     },
//     title: {
//       text: null, // No title as per your image
//     },
//     plotOptions: {
//       pie: {
//         allowPointSelect: true,
//         cursor: "pointer",
//         depth: 35,
//         dataLabels: {
//           enabled: true,
//           useHTML: true,
//           format:
//             '<span style="color:{point.color}; font-weight: bold; font-size: 14px;">{point.percentage:.0f}%</span><br><span style="color: #333;">{point.name}</span>',
//           connectorColor: "#ccc",
//         },
//       },
//     },
//     credits: {
//       enabled: false, // Removes Highcharts watermark
//     },
//     series: [
//       {
//         type: "pie",
//         name: "Share",
//         data: [
//           { name: "Australia", y: 30, color: "#7086FD", dataLabels: { color: "#7086FD" } },
//           { name: "France", y: 20, color: "#6FD195", dataLabels: { color: "#6FD195" } },
//           { name: "Canada", y: 10, color: "#FFAE4C", dataLabels: { color: "#FFAE4C" } },
//           { name: "Other", y: 5, color: "#07DBFA", dataLabels: { color: "#07DBFA" } },
//         ],
//       },
//     ],
//   };

//   return (
//     <div className="w-full h-full">
//       <HighchartsReact highcharts={Highcharts} options={options} ref={chartRef} />
//     </div>
//   );
// };

// export default PieChart;

import React, { useEffect, useRef } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const PieChart = ({
  data = [
    { name: "Australia", y: 30, color: "#7086FD" },
    { name: "France", y: 20, color: "#6FD195" },
    { name: "Canada", y: 10, color: "#FFAE4C" },
    { name: "Other", y: 5, color: "#07DBFA" },
  ],
}) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      import("highcharts/highcharts-3d").then((module) => {
        module.default(Highcharts); // Enable Highcharts 3D
      });
    }
  }, []);

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
