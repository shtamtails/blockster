interface TitleProps {
  hr?: boolean;
  children: string;
  end?: JSX.Element;
}

export const Title: React.FC<TitleProps> = (props) => {
  return (
    <div className="title">
      <div className="title-text">{props.children}</div>
      {props.hr && (
        <div className="line-container">
          <div className="line" />
        </div>
      )}
      {props.end && <div className="title-end">{props.end}</div>}
    </div>
  );
};
