import { AirdropsCalendar } from "./assets/components/page/AirdropsCalendar/AirdropsCalendar";
import { AsideNews } from "./assets/components/page/AsideNews/AsideNews";
import { Charts } from "./assets/components/page/Charts/Charts";
import Header from "./assets/components/page/Header/Header";
import { Sidebar } from "./assets/components/page/Sidebar/Sidebar";
import { TrendingNow } from "./assets/components/page/TrendingNow/TrendingNow";
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
            <div className="aside-news-mobile">
              <AsideNews />
            </div>
            <AirdropsCalendar />
            <TrendingNow />
            <div className="main-ad">
              <img src="https://www.vseprosport.ru/images/bookmaker-banners/1xby_1645015630.webp" />
            </div>
            {/* <Title text="Topics" line />
            <div className="topics">
              <div className="tags">
                <div className="tag">Bitcoin</div>
                <div className="tag">Blockchain</div>
                <div className="tag">Economics</div>
                <div className="tag">Money Trading</div>
                <div className="tag">Alternative Investments</div>
                <div className="tag">Digitex</div>
                <div className="tag">BXR</div>
                <div className="tag">Blockster</div>
                <div className="tag">Cryptocurrency Investments</div>
                <div className="tag">Ethereum cryptos</div>
              </div>
              <a href="#" className="moretags">
                View more categories
              </a>
            </div> */}
          </main>
          <aside>
            <AsideNews />
            <div className="aside-ad">
              <img src="https://blockwiz.com/wp-content/uploads/2022/09/Blog-01-1.jpg" />
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}

export default App;
