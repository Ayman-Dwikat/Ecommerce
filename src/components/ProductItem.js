import { Link } from "react-router-dom";

const ProductItem = ({ id, image, name, price }) => {
  return (
    <Link to={`/product/${id}`} className="product-link">
      <div className="product-container">
        <img src={image} alt={name} />
        <p className="product-name">{name}</p>
        <p className="product-price">${price}</p>
      </div>
    </Link>
  );
};

export default ProductItem;
