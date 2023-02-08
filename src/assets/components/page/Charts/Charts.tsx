import { Chart } from "../../reusable/Chart/Chart";

export const Charts = () => {
  const data: { uv: number }[] = [
    {
      uv: 2300,
    },
    {
      uv: 3000,
    },
    {
      uv: 2000,
    },
    {
      uv: 2780,
    },
    {
      uv: 1890,
    },
    {
      uv: 2390,
    },
    {
      uv: 4649.3,
    },
  ];
  return (
    <div className="charts">
      <Chart name="BTC" price="1$" diff={3.94} data={data} />
      <Chart name="ETH" price="1$" diff={3.94} data={data} />
      <Chart name="DOGE" price="1$" diff={3.94} data={data} />
      <Chart name="USDT" price="1$" diff={3.94} data={data} />
      <Chart name="SOL" price="1$" diff={3.94} data={data} />
    </div>
  );
};
