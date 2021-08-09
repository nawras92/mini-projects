import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";

function App() {
  const [movies, setMovies] = useState([]);
  const url =
    "https://gist.githubusercontent.com/saniyusuf/406b843afdfb9c6a86e25753fe2761f4/raw/523c324c7fcc36efab8224f9ebb7556c09b69a14/Film.JSON";

  //fetch movies
  const fetchMovies = async () => {
    const res = await fetch(url);
    const data = res.json();
    return data;
  };

  useEffect(() => {
    const getMovies = async () => {
      const movies = await fetchMovies();
      setMovies(movies);
    };
    getMovies();
  }, []);
  return (
    <>
      <Header title="Movies DB" />
      <Main movies={movies} />
      <Footer />
    </>
  );
}

export default App;
