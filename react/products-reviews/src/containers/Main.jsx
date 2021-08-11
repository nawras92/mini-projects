import Product from "../components/Product";

const Main = (props) => {
  const { data: products } = props;
  return (
    <main className="main">
      {products &&
        products.map((product) => <Product key={product.id} {...product} />)}
    </main>
  );
};

export default Main;
