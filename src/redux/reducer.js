import $ from "jquery";
const theState = {
  color: "#2B3A55",
  bgcolor: "white",
  bgcolorSecond: "#ebe9e9",
  hamburger: false,
  SiderWidth: 80,
  Active: "Tableau de bord",
};
export const reducer = (state = theState, action) => {
  switch (action.type) {
    case "dark":
      return {
        ...state,
        color: "#FFFBF5",
        bgcolor: "#212225",
        bgcolorSecond: "#2d2e33",
      };
    case "white":
      return {
        ...state,
        color: "#212225",
        bgcolor: "white",
        bgcolorSecond: "#ebe9e9",
      };
    case "hamburger":
      return {
        ...state,
        hamburger: parseInt($(window).width()) < 900 ? true : false,
      };
    case "Swidth":
      return { ...state, SiderWidth: action.payload };
    case "SiderItems":
      return { ...state, Active: action.payload };
    default:
      return { ...state };
  }
};
