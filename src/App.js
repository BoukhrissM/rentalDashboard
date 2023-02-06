import "./App.css";
import { useSelector,useDispatch} from "react-redux";
import Dashboard from "./Sections/Layout_folder/Dashboard"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { useEffect } from "react";
function App() {
  const theme = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(()=>{dispatch({type:localStorage.getItem("theme")})},[])
  return (
    <div className="App">
      <Dashboard/>
    </div>
  );
}

export default App;
