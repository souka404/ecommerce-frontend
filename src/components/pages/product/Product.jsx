import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Product.css";
import ButtonAddProduct from "components/layouts/buttonAddProduct/ButtonAddProduct";
import Loader from "components/layouts/loader/Loader";

export default function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      setProduct(await response.json());
      setLoading(false);
    };
    getProduct();
  }, []);

  const ShowProduct = () => {
    return (
      <>
        <div className="col-md-6">
          <img
            src={product.image}
            class="card-img-top"
            alt={product.title}
            height="200px"
            width="80px"
          />
        </div>
        <div className="col-md-6">
          <h4 className="text-uppercase text-black-50">{product.category}</h4>
          <h1 className="display-5">{product.title}</h1>
          <p className="lead fw-bolder">
            Rating {product.rating && product.rating.rate}
            <i className="fa fa-star"></i>
          </p>
          <h3 className="display-6 fw-bold my-4">$ {product.price}</h3>
          <p className="lead">{product.description}</p>
          <ButtonAddProduct
            product={product}
            className={"btn btn-dark px-4 py-2"}
          />
        </div>
      </>
    );
  };

  return (
    <div className="product-detail">
      <div className="container py-5">
        <div className="row py-4">
          {loading ? <Loader /> : <ShowProduct />}
        </div>
      </div>
    </div>
  );
}
