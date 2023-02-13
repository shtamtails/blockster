// import { Title } from "../../reusable/Title/Title";
// import { Podcast } from "./Podcast";

// export const Podcasts = () => {
//   return (
//     <>
//       <Title text="Podcasts" line />
//       <div className="podcasts-container">
//         <Podcast
//           img="https://i.scdn.co/image/ab6765630000ba8af023bad0b4944a20148bfbc7"
//           author="nft now"
//           title="How to Succeed in Web3 Marketing"
//           duration="01:56:23"
//           src="#"
//           listeners="1,143"
//         />
//         <Podcast
//           img="https://podcastle.ai/blog/content/images/2022/02/NFT-Podcasts.png"
//           author="The Bad Crypto Podcast"
//           title="Is Algorand the Future of Finance"
//           duration="00:34:54"
//           src="#"
//           listeners="23,534"
//         />
//         <Podcast
//           img="https://images-prod.dazeddigital.com/786/azure/dazed-prod/1300/6/1306411.jpg"
//           author="The Verge"
//           title="How MoonPay Plans to Onboard the World Into Web3"
//           duration="02:05:14"
//           src="#"
//           listeners="673"
//         />
//       </div>
//     </>
//   );
// };

import { Title } from "../../reusable/Title/Title";
import { Podcast } from "./Podcast";

export const Podcasts = () => {
  return (
    <>
      <Title text="Podcasts" line />
      <div className="podcasts-container">
        <Podcast
          img="https://i.scdn.co/image/ab6765630000ba8af023bad0b4944a20148bfbc7"
          author="nft now"
          title="How to Succeed in Web3 Marketing"
          duration="01:56:23"
          src="#"
          listeners="1,143"
        />
        <Podcast
          img="https://podcastle.ai/blog/content/images/2022/02/NFT-Podcasts.png"
          author="The Bad Crypto Podcast"
          title="Is Algorand the Future of Finance"
          duration="00:34:54"
          src="#"
          listeners="23,534"
        />
        <Podcast
          img="https://images-prod.dazeddigital.com/786/azure/dazed-prod/1300/6/1306411.jpg"
          author="The Verge"
          title="How MoonPay Plans to Onboard the World Into Web3"
          duration="02:05:14"
          src="#"
          listeners="673"
        />
      </div>
    </>
  );
};
