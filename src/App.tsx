import { BsGlobe2, BsLightningCharge, BsStar } from "react-icons/bs";
import Header from "./assets/components/page/Header/Header";
import "./assets/style/main.scss";
import { Sidebar } from "./assets/components/page/Sidebar/Sidebar";
import { LineChart, Line, CartesianGrid, Tooltip, XAxis, YAxis, Area, AreaChart, ResponsiveContainer } from "recharts";
import { Charts } from "./assets/components/page/Charts/Charts";

function App() {
  return (
    <>
      <Header />
      <Sidebar />
      <div className="content">
        <Charts />
      </div>
    </>
  );
}

export default App;
