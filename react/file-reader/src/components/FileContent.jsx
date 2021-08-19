import { useSelector } from "react-redux";
const FileContent = () => {
  const filename = useSelector((state) => state.getFileInfo.filename);
  const content = useSelector((state) => state.getFileInfo.content);
  return (
    <div className="file">
      <h3 className="file-title">{filename}</h3>
      <p className="file-text">{content}</p>
    </div>
  );
};

export default FileContent;
