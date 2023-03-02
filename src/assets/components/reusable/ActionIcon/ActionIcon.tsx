import { forwardRef, ReactElement } from "react";
import { IconType } from "react-icons";

interface ActionIconProps {
  icon?: ReactElement<IconType>;
  endIcon?: ReactElement<IconType>;
  src?: string;
  onClick?: () => any;
  className?: string;
  img?: string;
  type?: "hover" | "outline";
  borderRadius?: "xs" | "sm" | "md" | "lg" | "xl" | "round";
  selected?: boolean;
  children?: string | JSX.Element;
}

export const ActionIcon = forwardRef<HTMLAnchorElement, ActionIconProps>((props, ref) => {
  const classNames: string[] = ["action-icon"];
  props.className && classNames.push(props.className);
  props.type && classNames.push(`action-icon-${props.type}`);
  props.borderRadius && classNames.push(`border-${props.borderRadius}`);
  props.selected && classNames.push(`action-icon-hover-selected`);

  return (
    <a href={props.src} className={classNames.join(" ")} onClick={props.onClick} ref={ref}>
      {props.icon && props.icon}
      {props.img && <img src={props.img} className={props.borderRadius && `border-${props.borderRadius}`} />}
      {props.children && <div className="action-button-children">{props.children}</div>}
      {props.endIcon && props.endIcon}
    </a>
  );
});
