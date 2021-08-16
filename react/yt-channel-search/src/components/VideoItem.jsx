const VideoItem = (props) => {
  const { title, description, thumbnail } = props;
  return (
    <div className="video">
      <img className="video-thumbnail" src={thumbnail} alt="video thumbnail" />
      <h3 className="video-title">{title}</h3>
      <p className="video-description">{description}</p>
    </div>
  );
};

export default VideoItem;
