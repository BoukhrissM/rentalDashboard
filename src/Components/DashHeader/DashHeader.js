import { useDispatch, useSelector } from "react-redux";
import { ProfileDropDown } from "../ProfileDropDow/ProfileDropDown";
import SwitcherMode from "../SwitcherMode/SwitcherMode";
import { Grid } from "@mui/material";
import Hamburger from "hamburger-react";
import $ from "jquery";
import './DashHeader.css';




const DashHeader = () => {
  const theme = useSelector((state) => state);
  const dispatch = useDispatch();
  $(window).on("resize", () => {
      dispatch({type:"hamburger"});
  });


  const HeaderStyle={
    boxShadow: "0px 1px 14px -1px rgba(0,0,0,0.75)",
    backgroundColor:theme.bgcolor==="white"?theme.bgcolor:theme.bgcolorSecond,
    borderRadius:"0 0 1vh 1vh",
    height:"10vh"
  }
  return (
    <Grid container style={HeaderStyle}>
      {$(window).width() < 660 ?<Grid item xs={6} style={{color:theme.color}} className="px-3">
      <Hamburger onToggle={()=>{dispatch({type:"Swidth",payload:theme.SiderWidth==0?80:0})}}/>
      </Grid>:""}
      {theme.SiderWidth!=0 && $(window).width() > 660 ?<Grid item xs={4} style={{color:theme.color}} className="px-3">
        <div color={theme.color} className="logo"><span style={{color:theme.bgcolor==="white"?theme.color:"#FF7B54"}}>RENTAL</span> CAR</div>
      </Grid>:""}
      {theme.SiderWidth!=0 && $(window).width() > 660?<Grid item xs={4} style={{color:theme.bgcolor==="white"? "#95a5a6" : "#bdc3c7"}} className="px-3 d-flex justify-content-center align-items-center">
        <div  className="logo text-uppercase">{theme.Active}</div>
      </Grid>:""}
      <Grid
        item
        xs={theme.SiderWidth!=0?4:6}
        className={`d-flex flex-row justify-content-end align-items-center`}
      >
        <div className="d-flex flex-center mx-1"><SwitcherMode/></div>
        <div className="mx-1"><ProfileDropDown/></div>
      </Grid>
    </Grid>
  );
};
export default DashHeader;
