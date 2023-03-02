import { AirdropPost } from "./AirdropPost";
import { useState, useEffect, useRef } from "react";
import { Title } from "../../../reusable/Title/Title";
import "./AirdropsCalendar.scss";

export const AirdropsCalendar = () => {
  const [scrollX, setScrollX] = useState({ side: "" });
  const [scrollLeft, setScrollLeft] = useState(0);
  // @ts-ignore
  const chartsRef: RefObject<HTMLDivElement> = useRef();
  const handleScroll = (data: { side: string }) => {
    setScrollX(() => ({ side: data.side }));
  };

  useEffect(() => {
    if (scrollX.side === "right") {
      chartsRef.current!.scrollLeft += 250;
      setScrollLeft(chartsRef.current!.scrollLeft + 250);
    }
    if (scrollX.side === "left") {
      chartsRef.current!.scrollLeft -= 250;
      setScrollLeft(chartsRef.current!.scrollLeft - 250);
    }
  }, [scrollX]);

  return (
    <>
      <Title hr>Airdrops Calendar</Title>
      <div className="airdrops-container">
        {scrollLeft > 0 && (
          <button
            className={`scroll-button airdrop-scroll-button-left airdrop-scroll-button`}
            onClick={() => handleScroll({ side: "left" })}
          >
            {"<"}
          </button>
        )}
        <div className="airdrops-calendar" ref={chartsRef}>
          <AirdropPost date="3 Feb 2023" title="TopGoal x CoinMarketCap 3rd NFTs Airdrop event" amount="3 000 NFT" />
          <AirdropPost date="21 Feb 2023" title="HashLand New Era Airdrop" amount="1 000 NFT" />
          <AirdropPost date="23 Feb 2023" title="Vow Airdorp" amount="2 000 NFT" />
          <AirdropPost date="21 Feb 2023" title="HashLand New Era Airdrop" amount="1 000 NFT" />
          <AirdropPost date="16 Feb 2023" title="Zuki Moba - 10 000 NFT Sivler Chest Airdrop" amount="10 000 NFT" />
          <AirdropPost date="28 Feb 2023" title="Binance Airdrop" amount="1 000 ETH" />
          <AirdropPost date="21 Feb 2023" title="HashLand New Era Airdrop" amount="1 000 NFT" />
        </div>
        <button
          className="scroll-button airdrop-scroll-button-right airdrop-scroll-button"
          onClick={() => handleScroll({ side: "right" })}
        >
          {">"}
        </button>
      </div>
    </>
  );
};
