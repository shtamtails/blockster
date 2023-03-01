import { BsTwitter } from "react-icons/bs";
import { Title } from "../../../reusable/Title/Title";
import { AsidePost } from "./AsidePost";
import "./AsideNews.scss";

export const AsideNews = () => {
  return (
    <>
      <Title hr>News</Title>
      <div className="news-container">
        <AsidePost
          src="#"
          srcIcon="https://pbs.twimg.com/profile_images/1492287717702615041/bcymg584_400x400.jpg"
          srcName="DeFi News Network"
          time="12 m"
          srcSocialIcon={<BsTwitter color={"#00acee"} />}
          content="The Ukrainian government announced on Tuesday that it will now accept crypto donations through the polkadot network after adding a dot waller address and promising that more coins will be added soon."
        />
        <AsidePost
          src="#"
          srcIcon="https://pbs.twimg.com/profile_images/1494079638758477832/PK2Vg2GP_400x400.jpg"
          srcName="XRIV | Infinity Vault"
          time="20 m"
          srcSocialIcon={<BsTwitter color={"#00acee"} />}
          content="Big news for the XRIV community! Our 2ND Airdrop will be held on Mar 06, 2022. 2ND Airdrop is only for holders."
        />
        <AsidePost
          src="#"
          srcIcon="https://miro.medium.com/max/2400/1*vSkLvlptxKN1x9ISfRJQrQ.png"
          srcName="Bitcoin Magazine"
          time="36 m"
          srcSocialIcon={<BsTwitter color={"#00acee"} />}
          content="BREAKING: Switzerland's City of Lugana will make #bitcoin"
        />
      </div>
    </>
  );
};
