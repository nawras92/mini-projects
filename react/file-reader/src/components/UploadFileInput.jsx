import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { FileUploadAction } from "../redux/actions/FileUploadAction";
import { FILE_UPLOADED } from "../redux/constants/ActionTypes";
import { readFile } from "../utils/Utils";

const UploadFileInput = () => {
  const dispatch = useDispatch();
  const [filename, setFilename] = useState("");
  const [fileContent, setFileContent] = useState("");
  const handleChange = (e) => {
    e.preventDefault();
    readFile(e, setFilename, setFileContent);
  };
  useEffect(() => {
    dispatch(
      FileUploadAction({
        type: FILE_UPLOADED,
        filename: filename,
        content: fileContent,
      })
    );
  });
  return (
    <div className="upload-form">
      <input
        className="upload-form-input"
        type="file"
        onChange={handleChange}
      />
    </div>
  );
};

export default UploadFileInput;
