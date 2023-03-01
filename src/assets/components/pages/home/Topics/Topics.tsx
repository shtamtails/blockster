import { Title } from "../../../reusable/Title/Title";
import { Post } from "../Post/Post";
import "./Topics.scss";

export const Topics = () => {
  const categories = [
    "Bitcoin",
    "Blockchain",
    "Economics",
    "Money Trading",
    "Alternative Investments",
    "Digitex",
    "BXR",
    "Blockster",
    "Cryptocurrency",
    "Investments",
    "Ethereum cryptos",
  ];
  return (
    <>
      <div className="topics">
        <Title hr>Topics</Title>
        <div className="tags">
          {categories.map((category, i) => (
            <div className="tag" key={i}>
              {category}
            </div>
          ))}
        </div>
        <div className="more-tags">
          <a href="#" className="more-tags">
            View more categories
          </a>
        </div>
        <div className="main-posts">
          <Post
            tags={["NFT"]}
            img="https://www.coindesk.com/resizer/7YofGkpzGLtEPJtg0AItqVfRdrM=/1056x534/filters:quality(80):format(webp)/cloudfront-us-east-1.images.arcpublishing.com/coindesk/B5XSZ65PLFA7BFQM2O4T3RN7KM.png"
            user="coindesk"
            link="/posts/5"
            date="22 Feb"
            title="Friendsies NFT Collection Deletes Twitter After 'Pause' Announcement Spurs Rug Pull Accusations"
            imgHeight="100%"
            imgWidth="250px"
            description="Non-fungible token (NFT) collection Friendsies is in hot water after announcing a “pause” and deleting its Twitter – sparking rumors the project is a rug pull. The initial drop of the NFTs in 2022 raised roughly $5 million."
          />
          <Post
            tags={["NFT"]}
            img="https://www.coindesk.com/resizer/7YofGkpzGLtEPJtg0AItqVfRdrM=/1056x534/filters:quality(80):format(webp)/cloudfront-us-east-1.images.arcpublishing.com/coindesk/B5XSZ65PLFA7BFQM2O4T3RN7KM.png"
            user="coindesk"
            link="/posts/6"
            date="22 Feb"
            title="Friendsies NFT Collection Deletes Twitter After 'Pause' Announcement Spurs Rug Pull Accusations"
            imgHeight="100%"
            imgWidth="250px"
            description="Non-fungible token (NFT) collection Friendsies is in hot water after announcing a “pause” and deleting its Twitter – sparking rumors the project is a rug pull. The initial drop of the NFTs in 2022 raised roughly $5 million."
          />
          <Post
            tags={["NFT"]}
            img="https://www.coindesk.com/resizer/7YofGkpzGLtEPJtg0AItqVfRdrM=/1056x534/filters:quality(80):format(webp)/cloudfront-us-east-1.images.arcpublishing.com/coindesk/B5XSZ65PLFA7BFQM2O4T3RN7KM.png"
            user="coindesk"
            link="/posts/7"
            date="22 Feb"
            title="Friendsies NFT Collection Deletes Twitter After 'Pause' Announcement Spurs Rug Pull Accusations"
            imgHeight="100%"
            imgWidth="250px"
            description="Non-fungible token (NFT) collection Friendsies is in hot water after announcing a “pause” and deleting its Twitter – sparking rumors the project is a rug pull. The initial drop of the NFTs in 2022 raised roughly $5 million."
          />
        </div>
      </div>
    </>
  );
};
