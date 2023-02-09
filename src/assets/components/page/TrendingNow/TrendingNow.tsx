import { Title } from "../../reusable/Title/Title";
import { TrendingBigPost } from "../../reusable/TrendingBigPost/TrendingBigPost";
import { TrendingSmallPost } from "../../reusable/TrendingSmallPost/TrendingSmallPost";

export const TrendingNow = () => {
  return (
    <>
      <Title text="Trending now" line />
      <div className="trending-now-container">
        <TrendingBigPost />
        <div className="right-posts">
          <TrendingSmallPost />
          <TrendingSmallPost />
          <TrendingSmallPost />
        </div>
      </div>
    </>
  );
};
