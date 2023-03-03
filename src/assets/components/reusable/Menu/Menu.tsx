import { createRef, forwardRef, RefObject, useEffect, useState } from "react";
import { useClickOutside } from "../../../hooks/useClickOutside";
import "./Menu.scss";

interface MenuProps {
  rect: DOMRect;
  width: string | number;
  height?: string | number;
  topOffset?: number;
  children: JSX.Element;
  opened: boolean;
  setOpened: Function;
  parentElementRef: RefObject<any>;
}

export const Menu: React.FC<MenuProps> = (props) => {
  const [isTransitioning, setIsTransitioning] = useState(false);

  const refTop = props.rect.top;
  const refLeft = props.rect.left;
  const refHeight = props.rect.height;
  const refWidth = props.rect.width;
  const transformedWidth = typeof props.width === "string" ? Number(props.width.replace("px", "")) : props.width;

  const menuRef = createRef<HTMLDivElement>();

  const handleOutsideClick = () => {
    props.opened && props.setOpened(false);
  };

  useClickOutside(menuRef, props.parentElementRef, handleOutsideClick);

  const handleTransitionEnd = () => {
    !props.opened && setIsTransitioning(false);
  };

  useEffect(() => {
    props.opened && setIsTransitioning(true);
  }, [props.opened]);

  return (
    <>
      <div
        onTransitionEnd={handleTransitionEnd}
        className="menu"
        ref={menuRef}
        style={{
          width: props.width,
          height: props.height,
          left: refLeft + (refWidth - transformedWidth),
          top: refTop + refHeight + (props.topOffset || 0),
          transitionProperty: "opacity",
          transitionDuration: "150ms",
          transitionTimingFunction: "ease",
          opacity: props.opened ? 1 : 0,
          // ! BUG - ALWAYS DISPLAYED
          // TODO FIX BUG
          display: !isTransitioning ? "none" : "block",
        }}
      >
        {props.children}
      </div>
    </>
  );
};
