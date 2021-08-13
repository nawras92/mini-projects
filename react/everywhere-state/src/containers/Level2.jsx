import { useSelector } from "react-redux";
import Level3 from "./Level3.jsx";
const Level2 = () => {
  const value = useSelector((state) => state.getValue.value);

  return (
    <div className="level2">
      <h1 className="level2-heading">
        The state in the level2 container is:
        <span className="level2-subheading">{value}</span>
      </h1>
      <Level3 />
    </div>
  );
};

export default Level2;
