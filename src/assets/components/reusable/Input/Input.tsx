import { ReactElement, useEffect, useState } from "react";
import { IconType } from "react-icons";

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

  const tempClassNames = [];
  props.fullWidth && tempClassNames.push("input-fullwidth");
  props.size && tempClassNames.push(`input-size-${props.size}`);
  props.icon && tempClassNames.push("input-with-icon");

  const [classNames, setClassNames] = useState<string[]>(tempClassNames);
  const [iconClassNames, setIconClassNames] = useState<string[]>(["icon"]);
  const [selected, setSelected] = useState<boolean>(false);

  return (
    <div className="input-container">
      <input
        ref={props.ref}
        placeholder={props.placeholder}
        style={{ height: props.height, width: props.width }}
        onChange={handleChange}
        className={classNames.join(" ")}
        onClick={() => {}}
      />
      {props.icon && <div className={iconClassNames.join(" ")}>{props.icon}</div>}
    </div>
  );
};
