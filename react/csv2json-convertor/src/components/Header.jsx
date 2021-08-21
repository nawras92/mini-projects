const Header = (props) => {
  const { heading } = props;
  return (
    <header className="header">
      <h1 className="heading">{heading}</h1>
    </header>
  );
};

export default Header;
