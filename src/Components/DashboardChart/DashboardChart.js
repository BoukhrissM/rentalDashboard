import {
  CartesianGrid,
  Area,
  AreaChart,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import $ from "jquery";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const DashboardChart = () => {
  const theme = useSelector((state) => state);
  const [WindowSize, setWindowSize] = useState($(window).width());
  useEffect(() => {
    $(window).on("resize", () => {
      setWindowSize($(window).width());
    });
  }, []);
  const TitleStyle = {
    color: theme.bgcolor === "white" ? "#95a5a6" : "#bdc3c7",
    fontWeight: "bold",
  };

  return (
    <>
      <span style={TitleStyle} className="text-lowercase text-capitalize">
        statistique (Année)
      </span>

      <AreaChart
        width={
          WindowSize < 900
            ? WindowSize < 650
              ? WindowSize * 0.7
              : WindowSize * 0.74
            : WindowSize * 0.55
        }
        height={200}
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        className="mt-3"
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#FCE22A" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#FCE22A" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#ff7b54" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#ff7b54" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3"/>
        <Tooltip />
        <Area
          type="monotone"
          dataKey="uv"
          stroke="#BFDB38"
          fillOpacity={1}
          fill="url(#colorUv)"
        />
        <Area
          type="monotone"
          dataKey="pv"
          stroke="#D61355"
          fillOpacity={1}
          fill="url(#colorPv)"
        />
      </AreaChart>
    </>
  );
};

export default DashboardChart;
