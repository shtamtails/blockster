interface TitleProps {
  line?: boolean;
  text: string;
}

export const Title: React.FC<TitleProps> = (props) => {
  return (
    <div className="title">
      <div className="title-text">{props.text}</div>
      {props.line && (
        <div className="line-container">
          <div className="line" />
        </div>
      )}
    </div>
  );
};
