import { BsTwitter } from "react-icons/bs";
import { Charts } from "./assets/components/page/Charts/Charts";
import Header from "./assets/components/page/Header/Header";
import { Sidebar } from "./assets/components/page/Sidebar/Sidebar";
import { AsidePost } from "./assets/components/reusable/AsidePost/AsidePost";
import { Title } from "./assets/components/reusable/Title/Title";
import "./assets/style/main.scss";

function App() {
  return (
    <>
      <Header />
      <Sidebar />
      <div className="content">
        <Charts />
        <div className="news">
          <main>
            <Title text="Airdrops calendar" line />
            <div className="airdrops-calendar">
              <div className="box">
                <div className="airdrop-date">
                  <span>3</span> Feb 2023
                </div>
                <div className="airdrop-name">TopGoal x CoinMarketCap 3rd NFTs Airdrop Event</div>
                <div className="airdrop-amount">3 000 NFT</div>
              </div>
              <div className="box">
                <div className="airdrop-date">
                  <span>3</span> Feb 2023
                </div>
                <div className="airdrop-name">TopGoal x CoinMarketCap 3rd NFTs Airdrop Event</div>
                <div className="airdrop-amount">3 000 NFT</div>
              </div>
              <div className="box">
                <div className="airdrop-date">
                  <span>3</span> Feb 2023
                </div>
                <div className="airdrop-name">TopGoal x CoinMarketCap 3rd NFTs Airdrop Event</div>
                <div className="airdrop-amount">3 000 NFT</div>
              </div>
              <div className="box">
                <div className="airdrop-date">
                  <span>3</span> Feb 2023
                </div>
                <div className="airdrop-name">TopGoal x CoinMarketCap 3rd NFTs Airdrop Event</div>
                <div className="airdrop-amount">3 000 NFT</div>
              </div>
              <div className="box">
                <div className="airdrop-date">
                  <span>3</span> Feb 2023
                </div>
                <div className="airdrop-name">TopGoal x CoinMarketCap 3rd NFTs Airdrop Event</div>
                <div className="airdrop-amount">3 000 NFT</div>
              </div>
            </div>
            <Title text="Trending now" line />
          </main>
          <aside>
            <Title text="News" line />
            <div className="news-container">
              <AsidePost
                src="#"
                srcIcon="https://pbs.twimg.com/profile_images/1492287717702615041/bcymg584_400x400.jpg"
                srcName="DeFi News Network"
                time="12 m"
                srcSocialIcon={<BsTwitter color={"#00acee"} />}
                content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique consequuntur tenetur, odit quas quidem soluta sunt cumque eum atque libero, quibusdam necessitatibus dolores nam totam esse, excepturi perferendis quam officiis!..."
              />
              <AsidePost
                src="#"
                srcIcon="https://pbs.twimg.com/profile_images/1494079638758477832/PK2Vg2GP_400x400.jpg"
                srcName="XRIV | Infinity Vault"
                time="20 m"
                srcSocialIcon={<BsTwitter color={"#00acee"} />}
                content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio laborum aliquid labore ea repellendus, doloremque sapiente voluptatem unde fuga consequuntur?"
              />
              <AsidePost
                src="#"
                srcIcon="https://miro.medium.com/max/2400/1*vSkLvlptxKN1x9ISfRJQrQ.png"
                srcName="Bitcoin Magazine"
                time="36 m"
                srcSocialIcon={<BsTwitter color={"#00acee"} />}
                content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem distinctio..."
              />
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}

export default App;
