import React, { useEffect, useState } from "react";
import "./SearchPage.css";
import ProductCard from "components/layouts/productCard/ProductCard";
import { useParams } from "react-router-dom";
import Loader from "components/layouts/loader/Loader";

function SearchPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const { searchText } = useParams();
  console.log(searchText)
  useEffect(() => {
    const getData = async () => {
      setLoading(true)
      const response = await fetch("https://fakestoreapi.com/products").catch(
        (err) => console.log(err)
      );
      const data = await response.json();
      setProducts(
        data.filter((product) =>
          product.title.toLowerCase().includes(searchText.toLowerCase())
        )
        );
      setLoading(false)
    };
    getData();
  }, [searchText]);
  return (
    <div className="search-page">
      <div className="container">
        <p>
          {products.length} Results for: "{searchText}"
        </p>
        {loading && <Loader />}
        <div className="products">
          {products.map((product) => (
            <ProductCard product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
export default SearchPage;






