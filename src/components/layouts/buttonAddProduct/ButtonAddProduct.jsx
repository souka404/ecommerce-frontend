import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import ProductAlert from "components/layouts/alert/Alert";
import { FaCheckCircle, FaInfoCircle } from "react-icons/fa";
import { addCart } from "config/actions";

function ButtonAddProduct(props) {
  const [AlertComp, setIsAlertComp] = useState(null);
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.handleCart);
  const AddProduct = (product) => {
    const exist = cartProducts.find((x) => x.id === product.id);
    if (exist) {
      setIsAlertComp(
        <ProductAlert
          message={"Product is already added!"}
          iconComponent={<FaInfoCircle size={18} />}
          bgcolor={"#56bbff"}
        />
      );
    } else {
      dispatch(addCart(product));
      setIsAlertComp(
        <ProductAlert
          message={"Product Added!"}
          iconComponent={<FaCheckCircle size={18} />}
          bgcolor={"#2cca2c"}
        />
      );
    }
    const closeTimeOut = setTimeout(() => {
      setIsAlertComp(null);
      clearTimeout(closeTimeOut);
    }, 2000);
  };
  return (
    <>
      {AlertComp}
      <button
        onClick={() => AddProduct(props.product)}
        className={props.className}
        id={props.id}
      >
        Add to Cart
      </button>
    </>
  );
}

export default ButtonAddProduct;
