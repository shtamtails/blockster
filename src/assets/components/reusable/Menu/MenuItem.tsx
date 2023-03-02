import { createRef, ReactElement, useState } from "react";
import { IconType } from "react-icons";
import { spacing } from "../../../utils/style";

interface MenuItemProps {
  icon?: ReactElement<IconType>;
  children?: string | JSX.Element;
  end?: ReactElement<IconType> | string | JSX.Element;
  color?: string;
  hoverColor?: string;
}

export const MenuItem: React.FC<MenuItemProps> = (props) => {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <button
      className="menu-item"
      style={{ backgroundColor: isHover ? props.hoverColor : "transparent" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {props.icon && (
        <div className="menu-item-icon" style={{ color: props.color }}>
          {props.icon}
        </div>
      )}
      {props.children && (
        <div className="menu-item-body" style={{ color: props.color }}>
          {props.children}
        </div>
      )}
      {props.end && (
        <div className="menu-item-end" style={{ color: props.color }}>
          {props.end}
        </div>
      )}
    </button>
  );
};
