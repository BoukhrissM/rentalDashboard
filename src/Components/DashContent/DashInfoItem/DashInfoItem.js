import "./DashInfoItem.css";
import { Statistic } from "antd";
import { Paper } from "@mui/material";
import { HiDocumentCheck } from "react-icons/hi2";
import { useSelector } from "react-redux";

const DashInfoItem = (props) => {
  const theme = useSelector((state) => state);

  const ItemStyle = {
    height: "16vh",
    backgroundColor: theme.bgcolor==="white"?theme.bgcolor:theme.bgcolorSecond,
    
  };
  const TitleStyle = { color: theme.bgcolor==="white"? "#95a5a6" : "#bdc3c7",fontWeight:"bold"}
  return (
    <Paper elevation={10} className="p-3 DashItem" style={ItemStyle}>
      {/* <Skeleton avatar paragraph={{rows:2}} active/> */}
      <span style={TitleStyle} className="text-lowercase text-capitalize">{props.title}</span>
      <Statistic
        prefix={props.prefix}
        value={props.value}
        valueStyle={{ color: theme.color,fontSize:"5vh" }}
        style={{ color: theme.color,fontWeight:"bold",fontFamily:"'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"}}
      />
    </Paper>
  );
};

export default DashInfoItem;
