import logo from "/src/assets/img/logo.png";
import { FiBell, FiUser, FiPlusCircle, FiSearch, FiMenu } from "react-icons/fi";
import { Input } from "../../reusable/Input/Input";
import { useState } from "react";
import { ActionIcon } from "../../reusable/ActionIcon/ActionIcon";
import "./header.scss";

const Header = () => {
  const [value, setValue] = useState<string>("");
  return (
    <div className="header">
      <a href="http://localhost:5173/" className="logo">
        <img src={logo} />
        <div className="header-title">
          <div className="upper-title">BLOCKSTER</div>
          <div className="lower-title">early access</div>
        </div>
      </a>
      <div className="search">
        <Input placeholder="Search" icon={<FiSearch />} onChange={setValue} fullWidth />
      </div>
      <div className="misc">
        <ActionIcon icon={<FiMenu size={22} />} className="button-icon mg-l-xl" />
        <ActionIcon icon={<FiSearch size={22} />} className="main-icon search-icon mg-l-xl" />
        <ActionIcon icon={<FiPlusCircle size={22} />} className="main-icon mg-l-xl" />
        <ActionIcon icon={<FiBell size={22} />} className="main-icon mg-l-xl" />
        <ActionIcon img={logo} className="main-icon mg-l-xl" />
      </div>
    </div>
  );
};

export default Header;
