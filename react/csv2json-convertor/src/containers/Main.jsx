import { useSelector } from "react-redux";
import InfoBox from "../components/InfoBox";
import FileInput from "../components/FileInput";
import Results from "../components/Results";
const Main = () => {
  const content = useSelector((state) => state.getFileInfo.content);
  const infoBox = {
    title: "About CSV 2 JSON Convertor",
    text: "Please upload a CSV file and we will convert it to JSON file. The uploaded file should be a valid CSV file, otherwise the conversion process is NOT going to be successful. This app performance decays as files get larger.",
  };
  return (
    <main className="main">
      <InfoBox {...infoBox} />
      <FileInput />
      {content && <Results />}
    </main>
  );
};

export default Main;
