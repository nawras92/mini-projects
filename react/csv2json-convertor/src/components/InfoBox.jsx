const InfoBox = (props) => {
  const { title, text } = props;
  return (
    <div className="info-box">
      <h4 className="info-box-title">{title}</h4>
      <p className="info-box-text">{text}</p>
    </div>
  );
};

export default InfoBox;
