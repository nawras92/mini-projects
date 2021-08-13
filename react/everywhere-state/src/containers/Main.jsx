import { useSelector } from "react-redux";
import Level1 from "./Level1.jsx";
const Main = () => {
  const value = useSelector((state) => state.getValue.value);
  return (
    <div className="main">
      <h1 className="main-heading">
        The state in the main container is:
        <span className="main-subheading">{value}</span>
      </h1>
      <Level1 />
    </div>
  );
};

export default Main;
