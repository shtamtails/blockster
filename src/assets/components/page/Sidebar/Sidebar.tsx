import { AiOutlineLineChart, AiOutlineFlag } from "react-icons/ai";
import { BsGlobe2, BsLightningCharge } from "react-icons/bs";
import { RiHome2Line, RiUserLine } from "react-icons/ri";
import { ActionIcon } from "../../reusable/ActionIcon/ActionIcon";
import "./sidebar.scss";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <ActionIcon icon={<RiHome2Line size={28} />} type="hover" className="mg-md" selected />
      <ActionIcon icon={<BsGlobe2 size={26} />} type="hover" className="mg-md" />
      <ActionIcon icon={<AiOutlineLineChart size={26} />} type="hover" className="mg-md" />
      <ActionIcon icon={<AiOutlineFlag size={26} />} type="hover" className="mg-md" />
      <ActionIcon icon={<RiUserLine size={26} />} type="hover" className="mg-md" />
      <ActionIcon icon={<BsLightningCharge size={26} />} type="hover" className="mg-md" />
    </div>
  );
};
