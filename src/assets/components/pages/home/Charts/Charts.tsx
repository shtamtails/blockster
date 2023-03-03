import { RefObject, useEffect, useRef, useState } from "react";
import { Chart } from "./Chart";
import "./Chart.scss";

type Cryptocurrency = {
  name: string;
  visibleName: string;
  logo: string;
  price: string | null;
  data: { uv: number }[];
  diff: string | number;
};

export const Charts = () => {
  const getRandomData = () => {
    const data: { uv: number }[] = [
      {
        uv: Math.random() * 100,
      },
      {
        uv: Math.random() * 100,
      },
      {
        uv: Math.random() * 100,
      },
      {
        uv: Math.random() * 100,
      },
      {
        uv: Math.random() * 100,
      },
      {
        uv: Math.random() * 100,
      },
      {
        uv: Math.random() * 100,
      },
    ];
    return data;
  };

  const getPrice = async (name: string): Promise<string> => {
    type avgPrice = { mins: number; price: string };
    const response = await fetch(`https://api.binance.com/api/v3/avgPrice?symbol=${name}`);
    const price: avgPrice = await response.json();
    const tranformedPrice = +price.price;
    return `$${tranformedPrice.toFixed(2)}`;
  };

  const cryptocurrenciesDefault: Cryptocurrency[] = [
    {
      name: "BTCUSDT",
      visibleName: "BTC",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png",
      price: null,
      data: getRandomData(),
      diff: Math.floor(Math.random() * (100 - -100) + -100).toFixed(2),
    },
    {
      name: "ETHUSDT",
      visibleName: "ETH",
      logo: "https://www.citypng.com/public/uploads/preview/ethereum-eth-round-logo-icon-png-11662225468t3ckimsgp8.png",
      price: null,
      data: getRandomData(),
      diff: Math.floor(Math.random() * (100 - -100) + -100).toFixed(2),
    },
    {
      name: "DOGEUSDT",
      visibleName: "DOGE",
      logo: "https://www.citypng.com/public/uploads/preview/-31621003493w3kgccg24w.png",
      price: null,
      data: getRandomData(),
      diff: Math.floor(Math.random() * (100 - -100) + -100).toFixed(2),
    },
    {
      name: "SOLUSDT",
      visibleName: "SOL",
      logo: "https://upload.wikimedia.org/wikipedia/en/b/b9/Solana_logo.png",
      price: null,
      data: getRandomData(),
      diff: Math.floor(Math.random() * (100 - -100) + -100).toFixed(2),
    },
    {
      name: "BNBUSDT",
      visibleName: "BNB",
      logo: "https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/512/Binance-Coin-BNB-icon.png",
      price: null,
      data: getRandomData(),
      diff: Math.floor(Math.random() * (100 - -100) + -100).toFixed(2),
    },
    {
      name: "XRPUSDT",
      visibleName: "XRP",
      logo: "https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/512/Ripple-XRP-icon.png",
      price: null,
      data: getRandomData(),
      diff: Math.floor(Math.random() * (100 - -100) + -100).toFixed(2),
    },
    {
      name: "SHIBUSDT",
      visibleName: "SHIB",
      logo: "https://upload.wikimedia.org/wikipedia/en/5/53/Shiba_Inu_coin_logo.png",
      price: null,
      data: getRandomData(),
      diff: Math.floor(Math.random() * (100 - -100) + -100).toFixed(2),
    },
    {
      name: "LTCUSDT",
      visibleName: "LTC",
      logo: "https://cryptologos.cc/logos/litecoin-ltc-logo.png",
      price: null,
      data: getRandomData(),
      diff: Math.floor(Math.random() * (100 - -100) + -100).toFixed(2),
    },
    {
      name: "TRXUSDT",
      visibleName: "LTC",
      logo: "https://stakingcrypto.info/static/assets/coins/tron-logo.png",
      price: null,
      data: getRandomData(),
      diff: Math.floor(Math.random() * (100 - -100) + -100).toFixed(2),
    },
  ];

  const [cryptocurrencies, setCryptocurrencies] = useState<Cryptocurrency[]>(cryptocurrenciesDefault);

  const updateCryptocurrencies = async () => {
    const updatedCryptocurrencies: Cryptocurrency[] = [...cryptocurrencies];
    updatedCryptocurrencies.forEach(async (cryptocurrency: Cryptocurrency) => {
      const updatedPrice = await getPrice(cryptocurrency.name);
      setCryptocurrencies((prevCryptocurrencies) =>
        prevCryptocurrencies.map((prevEl) =>
          prevEl.name === cryptocurrency.name ? { ...prevEl, price: updatedPrice } : prevEl
        )
      );
    });
  };

  useEffect(() => {
    updateCryptocurrencies();
  }, []);

  const [scrollX, setScrollX] = useState({ side: "" });
  const [scrollLeft, setScrollLeft] = useState(0);
  const chartsRef: RefObject<HTMLDivElement> = useRef(null);
  const handleScroll = (data: { side: string }) => {
    setScrollX(() => ({ side: data.side }));
  };

  useEffect(() => {
    const chartsElement = chartsRef.current;
    const increment = 250;
    if (scrollX.side === "right") {
      chartsElement!.scrollLeft += increment;
      setScrollLeft(chartsElement!.scrollLeft + increment);
    }
    if (scrollX.side === "left") {
      chartsElement!.scrollLeft -= increment;
      setScrollLeft(chartsElement!.scrollLeft - increment);
    }
  }, [scrollX]);

  return (
    <div className="charts-container">
      {scrollLeft > 0 && (
        <button className={`scroll-button scroll-button-left`} onClick={() => handleScroll({ side: "left" })}>
          {"<"}
        </button>
      )}

      <div className="charts" ref={chartsRef}>
        {cryptocurrencies.map((el, i) => (
          <Chart
            name={el.visibleName}
            price={el.price}
            diff={el.diff}
            data={el.data}
            img={el.logo}
            key={i}
            visible={!!el.price}
          />
        ))}
      </div>
      <button className="scroll-button scroll-button-right" onClick={() => handleScroll({ side: "right" })}>
        {">"}
      </button>
    </div>
  );
};
