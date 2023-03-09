import { forwardRef, ReactElement, useEffect, useState } from "react";
import { IconType } from "react-icons";
import "./Button.scss";

interface ButtonProps {
  children: string | ReactElement;
  icon?: ReactElement<IconType>;
  width?: string | number;
  height?: string | number;
  type?: "hover" | "regular" | "secondary";
  onClick: Function;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const [buttonClassName, setButtonClassName] = useState(["button-container"]);

  useEffect(() => {
    props.type
      ? setButtonClassName((prev) => [...prev, `button-${props.type}`])
      : setButtonClassName((prev) => [...prev, `button-regular`]);
  }, []);

  return (
    <div className="button-container" style={{ width: props.width, height: props.height }}>
      <button
        ref={ref}
        className={buttonClassName.join(" ")}
        onClick={() => {
          props.onClick();
        }}
      >
        {props.icon && <div className="button-icon">{props.icon}</div>}
        {props.children}
      </button>
    </div>
  );
});
