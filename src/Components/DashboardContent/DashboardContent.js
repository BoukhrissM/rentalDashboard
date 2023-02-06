import "./DashboardContent.css";
import DashInfoItem from "../DashContent/DashInfoItem/DashInfoItem";
import { Masonry } from "@mui/lab";
import { Grid, Paper } from "@mui/material";
import { Container } from "@mui/material";
import { useEffect, useState } from "react";
import $ from "jquery";
import DashboardChart from "../DashboardChart/DashboardChart";
import { useSelector } from "react-redux";
import { MdViewDay } from "react-icons/md";
import { IoIosCar, IoMdToday } from "react-icons/io";
import { CgViewMonth } from "react-icons/cg";
import DashboardPieChart from "../DashboardChart/DashboardPieChart";
import RentedTable from "../DashboardTables/RentedTable";
const DashboardContent = () => {
  const [WindowSize, setWindowSize] = useState($(window).width());
  const theme = useSelector((state) => state);
  useEffect(() => {
    $(window).on("resize", () => {
      setMcolumns(
        $(window).width() < parseInt(900)
          ? $(window).width() < parseInt(700)
            ? 1
            : 2
          : 4
      );
      setWindowSize($(window).width());
    });
  }, []);
  const [Mcolumns, setMcolumns] = useState(
    parseInt(
      $(window).width() < parseInt(900)
        ? $(window).width() < parseInt(700)
          ? 1
          : 2
        : 4
    )
  );

  const GridStyle = {
    backgroundColor:
      theme.bgcolor === "white" ? theme.bgcolor : theme.bgcolorSecond,
  };

  return (
    <Container style={{ width: "97%", height: "100%" }} className="mx-4 py-4 ">
      <Masonry columns={Mcolumns} spacing={2} className="mt-2">
        <DashInfoItem
          title="véhicule libre"
          prefix={<IoIosCar color={"#ff7b54"} />}
          value={3}
        />
        <DashInfoItem
          title="véhicule réservé"
          prefix={<IoIosCar color={"#ff7b54"} />}
          value={4}
        />
        <DashInfoItem
          title="Nombre location (jour)"
          prefix={<MdViewDay color="#ff7b54" />}
          value={2}
        />
        <DashInfoItem
          title="Nombre location (Mois)"
          prefix={<CgViewMonth color={"#ff7b54"} />}
          value={6}
        />
      </Masonry>
      <Grid container>
        <Grid item xs={12} sm={12} md={8} className="pe-3 DashItem">
          <Paper
            className="p-3 overflow-hidden "
            elevation={10}
            style={GridStyle}
          >
            <DashboardChart />
          </Paper>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={4}
          className="pe-3 DashItem "
          style={{ marginTop: WindowSize < 900 ? "3vh" : "0" }}
        >
          <Paper className="p-3 h-100" elevation={10} style={GridStyle}>
            <DashboardPieChart />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={4} className="pe-3 mt-3 DashItem">
          <Paper className="p-3 h-100" elevation={10} style={GridStyle}>
            <DashboardPieChart />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={8} className="pe-3 mt-3 DashItem">
          <Paper className="p-3 h-100" elevation={10} style={GridStyle}>
            <RentedTable/>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default DashboardContent;
