import { AirdropsCalendar } from "./assets/components/page/AirdropsCalendar/AirdropsCalendar";
import { AsideNews } from "./assets/components/page/AsideNews/AsideNews";
import { Charts } from "./assets/components/page/Charts/Charts";
import Header from "./assets/components/page/Header/Header";
import { Podcasts } from "./assets/components/page/Podcasts/Podcasts";
import { Sidebar } from "./assets/components/page/Sidebar/Sidebar";
import { TrendingNow } from "./assets/components/page/TrendingNow/TrendingNow";
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
            <div className="podcasts-mobile">
              <Podcasts />
            </div>
          </main>
          <aside>
            <AsideNews />
            <div className="aside-ad">
              <img src="https://blockwiz.com/wp-content/uploads/2022/09/Blog-01-1.jpg" />
            </div>
            <Podcasts />
          </aside>
        </div>
      </div>
    </>
  );
}

export default App;
