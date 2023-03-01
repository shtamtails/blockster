import { BsInstagram, BsTwitter } from "react-icons/bs";
import { HiOutlineMail, HiOutlineMailOpen } from "react-icons/hi";
import { ActionIcon } from "../../reusable/ActionIcon/ActionIcon";
import "./footer.scss";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <h2>BLOCKSTER</h2>
      </div>
      <div className="footer-socials">
        <ActionIcon icon={<BsTwitter />} />
        <ActionIcon icon={<BsInstagram />} />
        <div className="socials-email">
          <div className="email-closed">
            <ActionIcon icon={<HiOutlineMail size={21} />} />
          </div>
          <div className="email-opened">
            <ActionIcon icon={<HiOutlineMailOpen size={21} />} />
          </div>
        </div>
      </div>
    </div>
  );
};
