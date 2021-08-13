import { useSelector } from "react-redux";
import Level2 from "./Level2.jsx";
const Level1 = () => {
  const value = useSelector((state) => state.getValue.value);
  return (
    <div className="level1">
      <h1 className="level1-heading">
        The state in the level1 container is:
        <span className="level1-subheading">{value}</span>
      </h1>
      <Level2 />
    </div>
  );
};

export default Level1;
