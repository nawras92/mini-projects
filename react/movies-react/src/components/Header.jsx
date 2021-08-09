const Header = (props) => {
  const { title } = props;
  return (
    <header className="header">
      <h1 className="header-heading">{title}</h1>
    </header>
  );
};

export default Header;
