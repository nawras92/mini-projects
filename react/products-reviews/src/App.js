import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./containers/Main";

function App() {
  const URL =
    "https://raw.githubusercontent.com/nawras92/resources/main/placeholder-data/products-reviews.json";

  const [products, setProducts] = useState([]);

  // Fetch Products
  const fetchProducts = async () => {
    const res = await fetch(URL);
    const data = res.json();
    return data;
  };

  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchProducts();
      setProducts(data.products);
    };
    getProducts();
  }, [products]);
  return (
    <>
      <Header heading="Products DB" />
      <Main data={products} />
      <Footer />
    </>
  );
}

export default App;
