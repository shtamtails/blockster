import { ReactElement, useState } from "react";
import { IconType } from "react-icons";
import { FiCloudLightning } from "react-icons/fi";

interface InputProps {
  placeholder?: string;
  height?: string;
  width?: string;
  icon?: ReactElement<IconType>;
  onChange: Function;
  ref?: React.RefObject<HTMLInputElement>;
  fullWidth?: boolean;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
}

export const Input: React.FC<InputProps> = (props) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    props.onChange(value);
  };

  const classNames: string[] = [];

  props.fullWidth && classNames.push("input-fullwidth");
  props.size && classNames.push(`input-size-${props.size}`);
  props.icon && classNames.push("input-with-icon");

  return (
    <div className="input-container">
      {props.icon && <div className="icon">{props.icon}</div>}
      <input
        ref={props.ref}
        placeholder={props.placeholder}
        style={{ height: props.height, width: props.width }}
        onChange={handleChange}
        className={classNames.join(" ")}
      />
    </div>
  );
};
