import "./SiderMenuItem.css";
import { Grid } from "@mui/material";
import { Tooltip } from "@nextui-org/react";
import { useSelector ,useDispatch} from "react-redux";
import $ from "jquery";
import { Divider } from "antd";

const styleItem = {
  height: "6vh",
  cursor: "pointer",
};

// work on item color changing to white during hover ?

/*the props is Icon // Text  // Action */
const SiderMenuItem = (props) => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state);
  const ClickHandle = ()=>{dispatch({type:"SiderItems",payload:props.action})}
  return (
    // <Container>
    <div style={{ width: "85%"}} className="d-flex flex-column justify-content-center align-items-center" onClick={ClickHandle}>
      <Tooltip
        content={props.Text}
        placement="right"
        color={theme.bgcolor === "white" ? "red" : "default"}
        className="w-100"
        animated
        shadow
        enterDelay={400}
      >
        <Grid
          container
          className={`d-flex justify-content-center align-items-center p-1 my-1 rounded theContainer w-100 ${
            theme.bgcolor === "white" ? "theLightContainer" : "theDarkContainer"
          } ${theme.Active===props.action? "isActive":""}`}
          style={styleItem}
          onMouseEnter={() => {
            $(".theContainer:hover .IconItem svg").css({
              color: "white !important",
            });
          }}
        >
          <Grid
            item
            ms={12}
            style={{
              fontSize: "3vh",
              justifyContent: "center",
              color: theme.color,
            }}
            className={`d-flex  align-items-center h-100 IconItem ${theme.Active===props.action? "isActive":""}`}
          >
            {props.Icon}
          </Grid>
        </Grid>
      </Tooltip>
      {props.withDivider?<Divider style={{backgroundColor:theme.color}}/>:""}
    </div>
    // </Container>
  );
};

export default SiderMenuItem;
