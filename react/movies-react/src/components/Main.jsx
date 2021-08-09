import Card from "./Card";

const Main = (props) => {
  const { movies } = props;
  return (
    <main className="main">
      {movies &&
        movies.map((movie) => {
          let movieInfo = {
            title: movie.Title,
            subtitle: movie.Year,
            text: movie.Plot,
            poster: movie.Poster,
          };
          return <Card {...movieInfo} />;
        })}
    </main>
  );
};

export default Main;
