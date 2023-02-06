import { VictoryPie } from "victory";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import $ from "jquery";

import { DonutChart,registerTheme,useTheme } from "bizcharts";
const DashboardPieChart = () => {
  
  const data = [
    {
      type: "Positive",
      value: 60
      //   label:"positive"
    },
    {
      type: "Negative",
      value: 40
      
    },
  ];

  const [WindowSize, setWindowSize] = useState($(window).width());
  useEffect(() => {
    $(window).on("resize", () => {
      setWindowSize($(window).width());
    });
  }, []);
  const theme = useSelector((state) => state);
  const TitleStyle = {
    color: theme.bgcolor === "white" ? "#95a5a6" : "#bdc3c7",
    fontWeight: "bold",
  };


  
  
  return (
    <>
      <span style={TitleStyle} className="text-lowercase text-capitalize">
        Feedback Clients
      </span>

      {/* <VictoryPie
          radius={({ datum }) => 50 + datum.y * 1}
          data={data01}
          colorScale={["#84D2C5", "#ff7b54", "orange", "cyan", "navy"]}
          labelRadius={({ innerRadius }) => innerRadius + 5 }
          height={250}
          animate={{
            duration: 2000,
          }}
          style={{ labels: { fill: "white", fontSize: 17, fontWeight: "bold" } }}
        /> */}
      <DonutChart
        data={data}
        color={["#FCE22A","#ff7b54"]}
        height={210}
        radius={0.8}
        angleField="value"
        colorField="type"
        pieStyle={{ stroke: theme.bgcolor==="white"?"white":theme.bgcolorSecond, lineWidth: 5 }}
        label={{ style: { fill: theme.bgcolor==="white"?"black":"white" }}}
        statistic={{title:{style:{color:theme.color}},content:{style:{color:theme.color}}}}
        legend={{text:{style:{fill:theme.color}},title:{style:{fill:theme.bgcolor==="white"?"white":theme.bgcolorSecond}}}}
      />
    </>
  );
};

export default DashboardPieChart;
