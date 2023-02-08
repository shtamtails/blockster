import { ReactElement } from "react";
import { IconType } from "react-icons";

interface ActionIconProps {
  icon?: ReactElement<IconType>;
  src?: string;
  onClick?: () => any;
  className?: string;
  img?: string;
  type?: "hover";
}

export const ActionIcon: React.FC<ActionIconProps> = (props) => {
  const classNames: string[] = ["action-icon"];
  props.className && classNames.push(props.className);
  props.type && classNames.push(`action-icon-${props.type}`);

  return (
    <a href={props.src} className={classNames.join(" ")} onClick={props.onClick}>
      {props.icon && props.icon}
      {props.img && <img src={props.img} />}
    </a>
  );
};
