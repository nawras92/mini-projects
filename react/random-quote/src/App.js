import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaSpinner } from "react-icons/fa";
import { randomElementFromArray } from "./utils/Utils";
import { fetchQuotes } from "./api/quotesApi";
import { FETCH_QUOTES } from "./redux/constants/ActionTypes";
import FetchQuotesAction from "./redux/actions/FetchQuotesAction";
import "./App.css";
import Quote from "./components/Quote";

function App() {
  const [quotes, setQuotes] = useState([]);
  const [clicked, setClicked] = useState(false);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    setClicked(!clicked);
  };

  const randomQuote = quotes ? randomElementFromArray(quotes) : null;

  useEffect(() => {
    const getQuotes = async () => {
      const data = await fetchQuotes();
      setQuotes(data);
      setLoading(false);
    };
    getQuotes();
    dispatch(FetchQuotesAction({ type: FETCH_QUOTES, quotes: quotes }));
  }, []);

  return (
    <div className="App">
      <button className="button" onClick={handleClick}>
        Display a quote
      </button>
      {loading && <FaSpinner className="icon-loading" />}{" "}
      {clicked && randomQuote && (
        <Quote key={randomQuote.id} text={randomQuote.quoteText} />
      )}
    </div>
  );
}

export default App;
