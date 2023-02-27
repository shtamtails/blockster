import { AirdropsCalendar } from "./assets/components/page/AirdropsCalendar/AirdropsCalendar";
import { AsideNews } from "./assets/components/page/AsideNews/AsideNews";
import { Charts } from "./assets/components/page/Charts/Charts";
import { Footer } from "./assets/components/page/Footer/Footer";
import Header from "./assets/components/page/Header/Header";
import { Podcasts } from "./assets/components/page/Podcasts/Podcasts";
import { Sidebar } from "./assets/components/page/Sidebar/Sidebar";
import { Topics } from "./assets/components/page/Topics/Topics";
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
            <a href="#" className="main-ad">
              <img src="https://i.ibb.co/XpZ3H6K/Untitled-12.png" />
            </a>
            <div className="podcasts-mobile">
              <Podcasts />
            </div>
            <Topics />
          </main>
          <aside>
            <AsideNews />
            <a href="#" className="aside-ad">
              <img src="https://i.ibb.co/sbDrhKp/Untitled-1.png" />
            </a>
            <Podcasts />
          </aside>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default App;
