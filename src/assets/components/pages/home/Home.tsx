import React from "react";
import { AirdropsCalendar } from "./AirdropsCalendar/AirdropsCalendar";
import { AsideNews } from "./AsideNews/AsideNews";
import { Charts } from "./Charts/Charts";
import { Podcasts } from "./Podcasts/Podcasts";
import { Topics } from "./Topics/Topics";
import { TrendingNow } from "./TrendingNow/TrendingNow";

export const Home = () => {
  return (
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
  );
};
