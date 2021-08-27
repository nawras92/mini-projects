const Quote = (props) => {
  const { text } = props;

  return (
    <div className="quote">
      <div className="quote-text">{text}</div>
    </div>
  );
};

export default Quote;
