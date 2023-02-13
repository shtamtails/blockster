import { AirdropPost, AirdropPostProps } from "./AirdropPost";
import { Title } from "../../reusable/Title/Title";

export const AirdropsCalendar = () => {
  const info: AirdropPostProps[] = [{ date: "3", title: "3", amount: "3" }];

  return (
    <>
      <Title text="Airdrops calendar" line />
      <div className="airdrops-calendar">
        <AirdropPost date="3 Feb 2023" title="TopGoal x CoinMarketCap 3rd NFTs Airdrop event" amount="3 000 NFT" />
        <AirdropPost date="21 Feb 2023" title="HashLand New Era Airdrop" amount="1 000 NFT" />
        <AirdropPost date="23 Feb 2023" title="Vow Airdorp" amount="2 000 NFT" />
        <AirdropPost date="21 Feb 2023" title="HashLand New Era Airdrop" amount="1 000 NFT" />
        <AirdropPost date="16 Feb 2023" title="Zuki Moba - 10 000 NFT Sivler Chest Airdrop" amount="10 000 NFT" />
        <AirdropPost date="28 Feb 2023" title="Binance Airdrop" amount="1 000 ETH" />
        <AirdropPost date="21 Feb 2023" title="HashLand New Era Airdrop" amount="1 000 NFT" />
      </div>
    </>
  );
};
