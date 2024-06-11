import { useState, useEffect } from "react";
import "./Products.css";
import ProductCard from "components/layouts/productCard/ProductCard";
import Loader from "components/layouts/loader/Loader";

export default function Products() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);

  let componentMounted = true;

  useEffect(() => {
    const getProduits = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        console.log(filter);
      }
      return () => (componentMounted = false);
    };
    getProduits();
  }, []);

  const filterProduct = (cat) => {
    const updatedList = data.filter((x) => x.category === cat);
    setFilter(updatedList);
  };

  const ShowProducts = () => {
    return (
      <>
        {filter.map((product) => {
          return <ProductCard product={product} />;
        })}
      </>
    );
  };
  return (
    <>
      <div className="all-products">
        <div className="container">
          <div className="header">
            <h1>Top Products</h1>
            <div className="buttons">
              <button onClick={() => setFilter(data)}> All</button>
              <button onClick={() => filterProduct("men's clothing")}>
                men's clothing
              </button>
              <button onClick={() => filterProduct("women's clothing")}>
                women's clothing
              </button>
              <button onClick={() => filterProduct("jewelery")}>
                jewelery
              </button>
              <button onClick={() => filterProduct("electronics")}>
                electronic
              </button>
            </div>
          </div>
          {loading && <Loader />}
          <div className="products">{!loading && <ShowProducts />}</div>
        </div>
      </div>
    </>
  );
}
