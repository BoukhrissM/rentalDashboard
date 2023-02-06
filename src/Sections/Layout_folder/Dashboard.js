import { Layout } from "antd";
import "./Dashboard.css";
import DashHeader from "../../Components/DashHeader/DashHeader";
import { useDispatch, useSelector } from "react-redux";
import SiderMenuItem from "../../Components/SiderMenuItem/SiderMenuItem";
import {
  IoCarSportOutline,
  IoCalendarOutline,
  IoSettingsOutline,
} from "react-icons/io5";
import { BsPeople, BsClockHistory } from "react-icons/bs";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { GiHomeGarage } from "react-icons/gi";
import DashboardContent from "../../Components/DashboardContent/DashboardContent";
import { Scrollbars } from "react-custom-scrollbars-2";
import { useEffect } from "react";
import $ from "jquery";
const { Sider, Header, Content } = Layout;
const Dashboard = () => {
  const theme = useSelector((state) => state);
  const dispatch = useDispatch();
  const SiderStyle = {
    backgroundColor:
      theme.bgcolor === "white" ? theme.bgcolor : theme.bgcolorSecond,
    boxShadow: "4px 9px 14px 2px rgba(0,0,0,0.24)",
  };
  useEffect(() => {
    if ($(window).width() < 660) dispatch({ type: "Swidth", payload: 0 });
    $(window).on("resize", () => {
      if ($(window).width() < 660) dispatch({ type: "Swidth", payload: 0 });
      else dispatch({ type: "Swidth", payload: 80 });
    });
  }, []);
  return (
    <>
      <Layout>
        <Sider style={SiderStyle} className="theSider" width={theme.SiderWidth}>
          <div className="h-100 w-100 d-flex flex-column align-items-center justify-content-center">
            <SiderMenuItem
              Icon={<MdOutlineSpaceDashboard />}
              Text="Tableau de bord"
              action="Tableau de bord"
            />
            <SiderMenuItem
              Icon={<IoCalendarOutline />}
              Text="Calendrier"
              action="Calendrier"
              withDivider
            />
            <SiderMenuItem
              Icon={<IoCarSportOutline />}
              Text="Véhicules"
              action="Véhicules"
            />
            <SiderMenuItem
              Icon={<BsPeople />}
              Text="Clients"
              action="Clients"
            />
            <SiderMenuItem
              Icon={<BsClockHistory />}
              Text="Historique"
              action="Historique"
              withDivider
            />
            <SiderMenuItem
              Icon={<GiHomeGarage />}
              Text="Société"
              action="Société"
            />
            <SiderMenuItem
              Icon={<IoSettingsOutline />}
              Text="Paramètre"
              action="Paramètre"
              className="SiderMenuItem"
            />
          </div>
        </Sider>
        <Layout>
          <Header
            className="theHeader"
            style={{ backgroundColor: theme.bgcolor }}
          >
            <DashHeader />
          </Header>
          <Content
            className="theContent "
            style={{ backgroundColor: theme.bgcolor }}
          >
            <Scrollbars style={{ width: "100%", height: "100%" }}>
              <DashboardContent />
            </Scrollbars>
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default Dashboard;
