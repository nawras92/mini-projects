export const fetchQuotes = () => {
  const URL = "http://localhost:4000/quotes";
  const getQuotes = async () => {
    const res = await fetch(URL);
    const data = await res.json();
    return data;
  };
  return getQuotes();
};
