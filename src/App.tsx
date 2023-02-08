import { RiHome2Line, RiUserLine } from "react-icons/ri";
import { BsGlobe2, BsLightningCharge } from "react-icons/bs";
import { AiOutlineLineChart, AiOutlineFlag } from "react-icons/ai";
import Header from "./assets/components/page/Header/Header";
import { ActionIcon } from "./assets/components/reusable/ActionIcon/ActionIcon";
import "./assets/style/main.scss";
import { Sidebar } from "./assets/components/page/Sidebar/Sidebar";

function App() {
  return (
    <>
      <Header />
      <Sidebar />
      <div className="content"></div>
    </>
  );
}

export default App;
