import "./App.css";
import React from "react";
import PieChart from "./components/Charts/PieChart/PieChart";
import StackedBarChart from "./components/Charts/BarChart/BarChart";
import DonutChart from "./components/Charts/Doughnut/Doughnut";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import Test from "./Test";
// import PieChart from "./PieChart";
import 'remixicon/fonts/remixicon.css';


const App = () => {
  return (
    // <div className="w-50 h-50 ">
    //   {/* <PieChart /> */}
    //   {/* <StackedBarChart /> */}
    //   {/* <DonutChart/> */}
    // </div>
    <div className="App">
      <Header />
      <Body />
      {/* <Test /> */}
    </div>
  );
};

export default App;
