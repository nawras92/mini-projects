const Card = (props) => {
  const { poster, title, subtitle, text } = props;
  return (
    <div className="card">
      <img src={poster} alt="movie poster here" className="card-img" />
      <div className="card-details">
        <h3 className="card-title">
          {title}
          <span className="card-subtitle">{subtitle}</span>
        </h3>
        <p className="card-text">{text}</p>
      </div>
    </div>
  );
};

export default Card;
