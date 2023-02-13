import { useState } from "react";
import { BsCheckLg, BsStar, BsStarFill } from "react-icons/bs";
import { AreaChart, Area } from "recharts";
import { ActionIcon } from "../../reusable/ActionIcon/ActionIcon";

interface ChartProps {
  name: string;
  price: string | number | null;
  diff: number | string;
  data: { uv: number }[];
  img: string;
  visible?: boolean;
}

export const Chart: React.FC<ChartProps> = (props) => {
  const [favourites, setFavourites] = useState<string[]>(["BTC", "ETH"]);

  const favouriteClick = (name: string) => {
    if (favourites.indexOf(name) !== -1) {
      setFavourites(favourites.filter((el) => el !== name));
    } else {
      setFavourites([...favourites].concat(name));
    }
  };

  return (
    <div className={`chart ${props.visible ? "visible" : "hidden"}`}>
      <div className="chart-info">
        <div className="chart-info-currency">
          <div className="chart-info-currency-logo">
            <ActionIcon img={props.img} borderRadius="round" />
          </div>
          <div className="chart-info-curreny-name">{props.name}</div>
        </div>
        <div className="chart-info-price">{props.price}</div>
        <div className={`chart-info-change ${props.diff > 0 ? "color-success" : "color-danger"}`}>
          {props.diff > 0 && "+"}
          {props.diff}%
        </div>
      </div>
      <div className="chart-misc">
        {favourites.indexOf(props.name) !== -1 ? (
          <ActionIcon
            icon={<BsStarFill />}
            onClick={() => {
              favouriteClick(props.name);
            }}
          />
        ) : (
          <ActionIcon
            icon={<BsStar />}
            onClick={() => {
              favouriteClick(props.name);
            }}
          />
        )}

        <AreaChart
          width={80}
          height={30}
          data={props.data}
          margin={{
            top: 0,
            right: 0,
            left: 0,
            bottom: 5,
          }}
        >
          <Area type="monotone" dataKey="uv" stroke="#339d75" fill="#1b1c21" />
        </AreaChart>
      </div>
    </div>
  );
};
