export interface AirdropPostProps {
  date: string;
  title: string;
  amount?: string;
  link?: string;
}

export const AirdropPost: React.FC<AirdropPostProps> = (props) => {
  const date = props.date.split(" ");

  return (
    <a href={props.link || "#"} className="box">
      <div className="airdrop-date">
        <span>{date.shift()}</span> {date.join(" ")}
      </div>
      <div className="airdrop-name">{props.title}</div>
      <div className="airdrop-amount">{props.amount}</div>
    </a>
  );
};
