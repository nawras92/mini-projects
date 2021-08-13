import { useSelector } from "react-redux";
import Level4 from "./Level4.jsx";
const Level3 = () => {
  const value = useSelector((state) => state.getValue.value);

  return (
    <div className="level3">
      <h1 className="level3-heading">
        The state in the level3 container is:
        <span className="level3-subheading">{value}</span>
      </h1>
      <Level4 />
    </div>
  );
};

export default Level3;
