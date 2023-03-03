import { createRef, ReactElement, RefObject, useRef, useState } from "react";
import { IconType } from "react-icons";
import { BsChevronDown } from "react-icons/bs";
import { useClickOutside } from "../../../hooks/useClickOutside";
import "./Select.scss";

export type SelectData = {
  icon?: ReactElement<IconType> | string | ReactElement;
  text: string;
  value: string;
};

interface SelectProps {
  label?: string;
  data: SelectData[];
  value: SelectData | null;
  setValue: Function;
  placeholder?: string;
  width?: string | number;
  height?: string | number;
  onSelect?: Function;
}

export const Select: React.FC<SelectProps> = (props) => {
  const [opened, setOpened] = useState<boolean>(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleItemClick = (i: number) => {
    props.setValue(props.data[i]);
    setOpened(false);
    props.onSelect && props.onSelect(props.data[i]);
  };

  const handleClick = () => {
    setOpened(!opened);
    setIsTransitioning(true);
  };

  const handleOutsideClick = () => {
    opened && setOpened(false);
  };

  const menuRef = createRef<HTMLDivElement>();
  const selectRef = createRef<HTMLDivElement>();

  useClickOutside(selectRef, menuRef, handleOutsideClick);

  const handleTransitionEnd = () => {
    if (!opened) {
      setIsTransitioning(false);
    }
  };

  return (
    <div className="select-container" style={{ width: props.width }}>
      {props.label && <div className="select-label">{props.label}</div>}
      <div className="select" onClick={handleClick} ref={selectRef}>
        {props.value ? (
          <>
            <div className="select-icon">{props.value.icon}</div>
            <div className="select-text">{props.value.text}</div>
          </>
        ) : (
          <div className="select-placeholder">{props.placeholder}</div>
        )}

        <div
          className={`select-chevron ${props.placeholder && "chevron-neutral"} ${
            opened ? "select-opened" : "select-closed"
          }`}
        >
          <BsChevronDown />
        </div>
      </div>
      <div
        onTransitionEnd={handleTransitionEnd}
        className="select-menu"
        ref={menuRef}
        style={{
          width: props.width || "320px",
          transitionProperty: "opacity",
          transitionDuration: "150ms",
          transitionTimingFunction: "ease",
          opacity: opened ? 1 : 0,
          display: !isTransitioning ? "none" : "block",
        }}
      >
        {props.data.map((item, i) => (
          <div
            key={i}
            className="select-menu-item"
            onClick={() => {
              handleItemClick(i);
            }}
          >
            <div className="select-menu-item-icon">{item.icon}</div>
            <div className="select-menu-item-text">{item.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
