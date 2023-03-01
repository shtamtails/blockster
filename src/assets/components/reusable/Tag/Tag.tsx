import "./Tag.scss";

interface TagProps {
  children: string;
}

export const Tag: React.FC<TagProps> = ({ children }) => {
  return <div className="tag">{children}</div>;
};
