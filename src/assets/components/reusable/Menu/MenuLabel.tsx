interface MenuLabelProps {
  children?: string | JSX.Element;
}

export const MenuLabel: React.FC<MenuLabelProps> = (props) => {
  return <div className="menu-label">{props.children}</div>;
};
