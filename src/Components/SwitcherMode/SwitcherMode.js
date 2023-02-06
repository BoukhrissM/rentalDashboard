import { Switch } from "@nextui-org/react";
import { useDispatch } from "react-redux";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

const SwitcherMode = () => {
  const dispatch = useDispatch();
  return (
    <Switch
      iconOff={<BsFillMoonFill color="purple" />}
      iconOn={<BsFillSunFill color="#d8962e" />}
      bordered
      checked={localStorage.getItem("theme") === "dark" ? true : false}
      color="purple"
      size={"md"}
      onChange={(e) => {
        switch (e.target.checked) {
          case true:
            dispatch({ type: "dark" });
            localStorage.setItem("theme", "dark");
            break;
          default:
            dispatch({ type: "white" });
            localStorage.setItem("theme", "white");
        }
      }}
    />
  );
};

export default SwitcherMode;
