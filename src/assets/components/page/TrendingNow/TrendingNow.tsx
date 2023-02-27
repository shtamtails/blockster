import { Title } from "../../reusable/Title/Title";
import { Post } from "../Post/Post";
import { TrendingBigPost } from "./TrendingBigPost";
import { TrendingSmallPost } from "./TrendingSmallPost";

export const TrendingNow = () => {
  return (
    <>
      <Title text="Trending now" line />
      <div className="trending-now-container">
        <TrendingBigPost
          img="https://images.lifestyleasia.com/wp-content/uploads/sites/2/2022/01/24163853/Right-Click-and-Save-guy-1.gif?tr=w-1200,h-900"
          title="The most expensive NFT artworks sold till date"
          tag="Business Spotlight"
          user="Maksim Yudzin"
          date="23 May"
          link="https://www.lifestyleasia.com/hk/culture/art-design/most-expensive-nft-artworks-ever-sold-till-date/"
        />
        <div className="right-posts">
          <Post
            img="https://images.lifestyleasia.com/wp-content/uploads/sites/2/2022/01/24163853/Right-Click-and-Save-guy-1.gif?tr=w-1200,h-900"
            title="The most expensive NFT artworks sold till date"
            tag="Business Spotlight"
            user="Maksim Yudzin"
            date="23 February"
            link="#"
          />
          <Post
            img="https://i.pinimg.com/originals/52/91/4b/52914b8ac2f16a11c42786c3d89a84f5.gif"
            title="How an LA-Based Latinx Artist Rose to the Top of the NFT World"
            tag="Business Spotlight"
            user="Nikita Robson"
            date="12 May"
            link="#"
          />
          <Post
            img="https://cdn.logojoy.com/wp-content/uploads/20220607093058/How-to-make-and-sell-NFT-art-header-image-2048x1365.jpeg"
            title="How to Make and Sell NFT Art – A Complete Beginners’ Guide"
            tag="Business Spotlight"
            user="Oliver Tree"
            date="10 May"
            link="#"
          />
          <Post
            img="https://www.fidinam.com/hubfs/nft-fine-art-collecting-1.jpg"
            title="NFTs as an evolution of fine art collecting"
            tag="Business Spotlight"
            user="Richard Woods"
            date="23 February"
            link="#"
          />
        </div>
      </div>
    </>
  );
};
