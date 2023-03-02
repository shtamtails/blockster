interface MenuElementProps {
  children: JSX.Element | string;
}

export const MenuElement: React.FC<MenuElementProps> = (props) => {
  return <div className="menu-element">{props.children}</div>;
};
