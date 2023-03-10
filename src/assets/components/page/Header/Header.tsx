import logo from "/src/assets/img/logo.png";
import { FiBell, FiPlusCircle, FiSearch, FiMenu, FiSettings } from "react-icons/fi";
import { MdExitToApp, MdLanguage } from "react-icons/md";
import { BiChevronDown, BiGasPump } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { Input } from "../../reusable/Input/Input";
import { RefObject, useEffect, useRef, useState } from "react";
import { ActionIcon } from "../../reusable/ActionIcon/ActionIcon";
import "./header.scss";
import Web3 from "web3";
import { Menu } from "../../reusable/Menu/Menu";
import { MenuLabel } from "../../reusable/Menu/MenuLabel";
import { MenuElement } from "../../reusable/Menu/MenuElement";
import { Select, SelectData } from "../../reusable/Select/Select";
import { MenuItem } from "../../reusable/Menu/MenuItem";
import { MenuDivider } from "../../reusable/Menu/MenuDivider";
const ethWeb3 = new Web3("https://mainnet.infura.io/v3/fab3eefeac694b8eb958f853c8920652");
const optimismWeb3 = new Web3("https://optimism-mainnet.infura.io/v3/fab3eefeac694b8eb958f853c8920652");

const Header = () => {
  const data = [
    {
      icon: <img src="https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/512/Ethereum-ETH-icon.png" />,
      text: "Ethereum",
      value: "ETH",
    },
    {
      icon: <img src="https://cryptologos.cc/logos/optimism-ethereum-op-logo.png" />,
      text: "Optimism",
      value: "OPT",
    },
  ];
  const [value, setValue] = useState<string>("");

  const [gasPrice, setGasPrice] = useState<string | null>(null);
  const [baseFee, setBaseFee] = useState<string | null>("");
  const [isGasPriceOpened, setIsGasPriceOpened] = useState<boolean>(false);
  const [displayedCryptoCurrency, setDisplayedCryptoCurrency] = useState<string>("ETH");
  const [selectedCryptoCurrency, setSelectedCryptoCurrency] = useState(data[0]);

  const [gasPricesBtnRect, setGasPricesBtnRect] = useState<DOMRect | null>(null);

  const [profileMenuBtnRect, setProfileMenuBtnRect] = useState<DOMRect | null>(null);
  const [isProfileMenuOpened, setIsProfileMenuOpened] = useState(false);

  const [alertMenuBtnRect, setAlertMenuBtnRect] = useState<DOMRect | null>(null);
  const [isAlertMenuOpened, setIsAlertMenuOpened] = useState(false);

  const gasPricesBtnRef: RefObject<HTMLAnchorElement> = useRef(null);
  const onGasPriceClick = () => {
    setIsGasPriceOpened(!isGasPriceOpened);
  };

  const profileBtnRef: RefObject<HTMLAnchorElement> = useRef(null);
  const onProfileBtnClick = () => {
    setIsProfileMenuOpened(!isProfileMenuOpened);
  };

  const alertBtnRef: RefObject<HTMLAnchorElement> = useRef(null);
  const onAlertBtnClick = () => {
    setIsAlertMenuOpened(!isAlertMenuOpened);
  };

  useEffect(() => {
    const gasBtnRect = gasPricesBtnRef.current?.getBoundingClientRect();
    gasBtnRect && setGasPricesBtnRect(gasBtnRect);

    const profileBtnRect = profileBtnRef.current?.getBoundingClientRect();
    profileBtnRect && setProfileMenuBtnRect(profileBtnRect);

    const alertBtnRect = alertBtnRef.current?.getBoundingClientRect();
    alertBtnRect && setAlertMenuBtnRect(alertBtnRect);
  }, []); // TODO: Set other way without state when component did mount

  const updateGasPrice = async () => {
    if (displayedCryptoCurrency === "ETH") {
      const fetchedGasPrice = await ethWeb3.eth.getGasPrice();
      setGasPrice(Number(ethWeb3.utils.fromWei(fetchedGasPrice, "gwei")).toFixed(0));
      const fetchedLastBlock = await ethWeb3.eth.getBlock("latest");
      const fetchedBaseFee = fetchedLastBlock.baseFeePerGas;
      fetchedBaseFee && setBaseFee(Number(ethWeb3.utils.fromWei(fetchedBaseFee?.toString(), "gwei")).toFixed(2));
    }
    if (displayedCryptoCurrency === "OPT") {
      const fetchedGasPrice = await optimismWeb3.eth.getGasPrice();
      setGasPrice(ethWeb3.utils.fromWei(fetchedGasPrice, "gwei"));
      setBaseFee(null);
    }
  };

  useEffect(() => {
    (async () => {
      updateGasPrice();
    })();
  }, [displayedCryptoCurrency]);

  // setInterval(async () => {
  //   updateGasPrice();
  // }, 60000);

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
        <ActionIcon icon={<FiMenu size={22} />} className="button-icon pd-l-xl" />
        <ActionIcon icon={<FiSearch size={22} />} className="main-icon search-icon pd-l-xl" />
        <ActionIcon
          ref={gasPricesBtnRef}
          icon={<BiGasPump size={20} />}
          className={`main-icon pd-l-xl gas-price-${isGasPriceOpened ? "opened" : "closed"}`}
          type="outline"
          endIcon={<BiChevronDown size={20} />}
          onClick={onGasPriceClick}
        >
          {gasPrice || "Gas"}
        </ActionIcon>
        {gasPricesBtnRect && (
          <Menu
            opened={isGasPriceOpened}
            setOpened={setIsGasPriceOpened}
            rect={gasPricesBtnRect}
            width={400}
            topOffset={9}
            parentElementRef={gasPricesBtnRef}
          >
            <>
              {baseFee && (
                <MenuElement>
                  <>
                    Base fee: <span className="gas-price-gwei">{baseFee} GWEI</span>
                  </>
                </MenuElement>
              )}

              <MenuLabel>Cryptocurrency</MenuLabel>
              <MenuElement>
                <Select
                  width="100%"
                  data={data}
                  value={selectedCryptoCurrency}
                  setValue={setSelectedCryptoCurrency}
                  placeholder="Select Cryptocurrency"
                  onSelect={(value: SelectData) => {
                    setDisplayedCryptoCurrency(value.value);
                  }}
                />
              </MenuElement>
            </>
          </Menu>
        )}
        <ActionIcon icon={<FiPlusCircle size={22} />} className="main-icon pd-l-xl" />
        <ActionIcon
          ref={alertBtnRef}
          icon={<FiBell size={22} />}
          className="main-icon pd-l-xl"
          onClick={onAlertBtnClick}
        />
        {alertMenuBtnRect && (
          <Menu
            rect={alertMenuBtnRect}
            width={300}
            topOffset={15}
            opened={isAlertMenuOpened}
            setOpened={setIsAlertMenuOpened}
            parentElementRef={alertBtnRef}
          >
            <>
              <MenuLabel>Alerts</MenuLabel>
            </>
          </Menu>
        )}
        <ActionIcon ref={profileBtnRef} img={logo} className="main-icon pd-l-xl" onClick={onProfileBtnClick} />
        {profileMenuBtnRect && (
          <Menu
            rect={profileMenuBtnRect}
            width={180}
            topOffset={15}
            opened={isProfileMenuOpened}
            setOpened={setIsProfileMenuOpened}
            parentElementRef={profileBtnRef}
          >
            <>
              <MenuLabel>Profile</MenuLabel>
              <MenuItem icon={<CgProfile />}>Profile</MenuItem>
              <MenuItem icon={<FiSettings />}>Settings</MenuItem>
              <MenuItem icon={<MdLanguage />}>Language</MenuItem>
              <MenuDivider />
              <MenuItem icon={<MdExitToApp />} color="#E03130" hoverColor="#4C292D">
                Log out
              </MenuItem>
            </>
          </Menu>
        )}
      </div>
    </div>
  );
};

export default Header;
