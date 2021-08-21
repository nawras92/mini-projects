import { useRef } from "react";
import { useSelector } from "react-redux";
const Results = () => {
  const filename = useSelector((state) => state.getFileInfo.filename);
  const content = useSelector((state) => state.getFileInfo.content);
  const jsonContent = useSelector((state) => state.getFileInfo.jsonContent);
  const textarea = useRef(null);
  const copyHandler = (e) => {
    e.preventDefault();
    textarea.current.select();
    navigator.clipboard.writeText(textarea.current.value);
  };
  return (
    <>
      <div className="results">
        <h4 className="results-filename">
          The uploaded filename is: {filename}
        </h4>
        <p className="results-content">
          The content of file is: <br /> {content}
        </p>
      </div>
      <div className="results">
        <textarea
          className="results-output"
          name="results-output"
          cols="80"
          rows="30"
          readOnly
          value={jsonContent}
          ref={textarea}
        ></textarea>
        <button className="results-button" onClick={copyHandler}>
          Copy to clipboard
        </button>
      </div>
    </>
  );
};

export default Results;
