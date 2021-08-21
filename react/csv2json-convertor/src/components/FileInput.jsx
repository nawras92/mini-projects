import { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { readFile } from "../utils/Utils";
import { FILE_UPLOAD } from "../redux/constants/ActionTypes";
import { FileUploadAction } from "../redux/actions/FileUploadAction";
import { CSV2JSON } from "../utils/Utils";

const FileInput = () => {
  const [filename, setFilename] = useState("");
  const [fileContent, setFileContent] = useState("");
  const [delimiter, setDelimiter] = useState(";");
  const [jsonContent, setJsonContent] = useState("");
  // const [isClicked, setIsClicked] = useState(false);
  const textInput = useRef();
  const fileInput = useRef();
  const dispatch = useDispatch();

  // set basic values
  const setValues = () => {
    setDelimiter(textInput.current.value);
    const files = fileInput.current.files;
    readFile(files, setFilename, setFileContent);
  };
  const handleClick = (e) => {
    e.preventDefault();
    setValues();
  };
  //set json content
  // const convertToJson = () => {
  // };
  // useEffect(() => {
  //   convertToJson();
  // }, []);
  useEffect(() => {
    setJsonContent(CSV2JSON(fileContent, delimiter));
    dispatch(
      FileUploadAction({
        type: FILE_UPLOAD,
        filename: filename,
        content: fileContent,
        jsonContent: jsonContent,
      })
    );
  });

  return (
    <form className="form" action="">
      <input className="form-file-input" type="file" ref={fileInput} />
      <input
        className="form-text-input"
        type="text"
        placeholder="delimiter"
        ref={textInput}
      />
      <button className="form-button" onClick={handleClick}>
        Submit
      </button>
    </form>
  );
};

export default FileInput;
