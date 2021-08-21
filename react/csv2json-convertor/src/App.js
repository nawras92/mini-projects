import "./App.css";
import Main from "./containers/Main";
import Footer from "./components/Footer";
import Header from "./components/Header";
function App() {
  return (
    <>
      <Header heading="CSV to JSON convertor" />
      <Main />

      <Footer />
    </>
  );
}

export default App;
