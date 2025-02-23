import "./App.css";
import React from "react";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
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
    </div>
  );
};

export default App;
