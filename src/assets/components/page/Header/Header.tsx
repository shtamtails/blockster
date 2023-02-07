import logo from "/src/assets/img/logo.png";
import { FiBell, FiUser, FiPlusCircle, FiSearch, FiMenu, FiCloudLightning } from "react-icons/fi";
import { Input } from "../../reusable/Input/Input";
import { useState } from "react";

const Header = () => {
  const [value, setValue] = useState<string>("");
  return (
    <div className="header">
      <a href="#" className="logo">
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
        <a href="#" className="action-button button-icon">
          <FiMenu size={22} />
        </a>
        <a href="#" className="action-button main-icon search-icon">
          <FiSearch size={22} />
        </a>
        <a href="#" className="action-button main-icon">
          <FiPlusCircle size={22} />
        </a>
        <a href="#" className="action-button main-icon">
          <FiBell size={22} />
        </a>
        <a href="#" className="action-button main-icon">
          <FiUser size={22} />
        </a>
      </div>
    </div>
  );
};

export default Header;
