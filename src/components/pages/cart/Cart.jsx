import React from "react";
import "./Cart.css";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { FaPlus, FaMinus, FaXmark } from "react-icons/fa6";
import { addCart, delAll, delCart, delCart0 } from "../../../config/actions";

function ProductItem({ product, minusFunc, plusFunc, removeFunc }) {
  return (
    <>
      <div className="product-item" key={product.id}>
        <Link to={`/products/${product.id}`}>
          <img src={product.image} alt="product" />
        </Link>
        <h3>{product.title}</h3>
        <div className="item-amount">
          <button onClick={() => minusFunc(product)}>
            <FaMinus size={15} />
          </button>
          <p>{product.qty}</p>
          <button onClick={() => plusFunc(product)}>
            <FaPlus size={15} width={"10"} />
          </button>
        </div>
        <div className="product-end-part">
          <p className="product-price">${product.price}</p>
          <button
            className="delete-product"
            onClick={() => removeFunc(product)}
          >
            Remove
          </button>
        </div>
      </div>
      <hr />
    </>
  );
}

function Cart() {
  const products = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();
  let totalPrice = 0;
  products.map(
    (product) => (totalPrice = totalPrice + product.price * product.qty)
  );
  const handleMinus = (product) => {
    dispatch(delCart(product));
  };
  const handlePlus = (product) => {
    dispatch(addCart(product));
  };
  const handleRemove = (product) => {
    dispatch(delCart0(product));
  };
  const handleRemoveAll = () => {
    dispatch(delAll());
  };
  console.log(products);
  return (
    <div className="cart">
      <div className="products">
        <div className="container">
          <div className="header">
            <h2>Shopping Cart</h2>
            <button onClick={handleRemoveAll}>Remove all</button>
          </div>
          <hr />
          {products.length === 0 ? <p>no product added to the cart</p> : ""}
          {products.map((product) => (
            <ProductItem
              product={product}
              minusFunc={handleMinus}
              plusFunc={handlePlus}
              removeFunc={handleRemove}
            />
          ))}
          <div className="checkout">
            <div className="total">
              <div className="sub-total">
                <h4>Total</h4>
                <p>{products.length} items</p>
              </div>
              <p className="total-price">
                ${parseFloat(totalPrice.toFixed(2))}
              </p>
            </div>
            <button>Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
