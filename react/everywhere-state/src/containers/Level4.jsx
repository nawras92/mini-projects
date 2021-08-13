import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { ProvideValueAction } from "../redux/actions/ProvideValueAction";

const Level4 = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("To be updated...");
  const inputRef = useRef();
  const onClickHandler = (e) => {
    e.preventDefault();
    dispatch(ProvideValueAction({ updatedValue: inputRef.current.value }));
    setValue(inputRef.current.value);
  };
  return (
    <div className="level4">
      <h1 className="level4-heading">
        The state in the level4 container is:
        <span className="level4-subheading">{value}</span>
      </h1>
      <div className="level4-userInput">
        <input
          className="level4-input"
          type="text"
          placeholder="Enter a value please"
          ref={inputRef}
        />
        <button className="level4-button" onClick={onClickHandler}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Level4;
