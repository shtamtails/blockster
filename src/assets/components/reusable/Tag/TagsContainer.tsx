import { ReactElement } from "react";

interface TagsContainerProps {
  children: ReactElement;
}

export const TagsContainer: React.FC<TagsContainerProps> = ({ children }) => {
  return <div className="tags">{children}</div>;
};
