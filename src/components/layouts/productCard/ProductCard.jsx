import { NavLink } from "react-router-dom";
import ButtonAddProduct from "components/layouts/buttonAddProduct/ButtonAddProduct";

function ProductCard({ product }) {

  return (
    <>
      <div key={product.id} className="product-card">
        <NavLink to={`/products/${product.id}`}>
          <img src={product.image} alt={product.title} height="200px" />
        </NavLink>
        <div className="product-details">
          <h5>{product.title}</h5>
          <div>
            <p className="product-price">${product.price}</p>
            <p className="product-rating">
              <i className="fa fa-star"></i> {product.rating.rate}(
              {product.rating.count})
            </p>
          </div>
          <ButtonAddProduct product={product}/>
        </div>
      </div>
    </>
  );
}

export default ProductCard