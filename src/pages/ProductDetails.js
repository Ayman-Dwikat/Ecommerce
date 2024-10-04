import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useGetProductByIdQuery } from "../store/services/productApi";
import { addItemToCart } from "../store/slices/cartSlice";
import { setItemsToBuy } from "../store/slices/orderSlice";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import ProductImages from "../components/ProductImages";
import RelatedProducts from "../components/RelatedProducts";
import ToastNotification from "../components/ToastNotification";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar as solidStar,
  faStarHalfAlt as solidStarHalf,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";

function ProductDetails() {
  const { productId } = useParams();
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { data: product, isLoading } = useGetProductByIdQuery(productId);

  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [errorMessage, setErrorMessage] = useState({ size: "", color: "" });

  // Toast states
  const [showCartToast, setShowCartToast] = useState(false);
  const toggleCartToast = () => setShowCartToast(!showCartToast);

  useEffect(() => {
    setQuantity(1);
    setSelectedColor("");
    setSelectedSize("");
  }, [productId]);

  const validateProductSelection = () => {
    let errors = { size: "", color: "" };
    let isValid = true;

    if (!selectedSize) {
      errors.size = "Please select a size";
      isValid = false;
    }
    if (!selectedColor) {
      errors.color = "Please select a color";
      isValid = false;
    }
    setErrorMessage(errors);

    return isValid;
  };

  const handleAddToCart = () => {
    if (validateProductSelection()) {
      const productToAdd = {
        ...product,
        quantity: parseInt(quantity, 10) || 1,
        size: selectedSize,
        color: selectedColor,
      };
      dispatch(addItemToCart(productToAdd));
      setShowCartToast(true);
    }
  };

  const handleBuyNow = () => {
    if (validateProductSelection()) {
      const itemToBuy  = {
        ...product,
        quantity: parseInt(quantity, 10) || 1,
        size: selectedSize,
        color: selectedColor,
      };
      dispatch(setItemsToBuy([itemToBuy])); // Send array of products to purchase
      navigate("/payment");
    }
  };

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <>
        {Array(fullStars)
          .fill()
          .map((_, i) => (
            <FontAwesomeIcon key={i} icon={solidStar} />
          ))}
        {hasHalfStar && <FontAwesomeIcon icon={solidStarHalf} />}
        {Array(emptyStars)
          .fill()
          .map((_, i) => (
            <FontAwesomeIcon key={fullStars + i + 1} icon={regularStar} />
          ))}
      </>
    );
  };

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  if (isLoading) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ marginBlock: "15vh" }}
      >
        <div className="spinner-border text-primary" role="status"></div>
      </div>
    );
  }

  return (
    <div className="details border-top">
      <section className="section">
        <Row>
          {/* Product Image */}
          <Col sm={5} md={4} className="mb-4">
            <a
              data-fslightbox="mygalley"
              target="_blank"
              rel="noopener noreferrer"
              data-type="image"
              href={product.images[0]}
            >
              <img
                className="product-image"
                src={product.images[0]}
                alt="Product"
              />
            </a>

            <ProductImages images={product.images} />
          </Col>

          {/* Product Details */}
          <Col sm={6} md={7} className="ms-0 ms-sm-4 ms-md-5">
            <h4 className="title text-dark">{product.title}</h4>

            {/* Orders and In stock */}
            <div className="d-flex flex-row my-3">
              <div className="text-warning mb-1 me-2">
                {renderStars(product.rating)}
                <span className="ms-1">{product.rating.rate}</span>
              </div>
              <span className="text-muted">
                <i className="fas fa-shopping-basket fa-sm mx-1"></i>
                {`${product.stock} Orders`}
              </span>
              <span className="text-success ms-2">(In stock)</span>
            </div>

            <div className="mb-3">
              <span className="h5">${product.price}</span>
              <span className="text-muted"> /per box</span>
            </div>
            <p>{product.description}</p>

            <Row>
              <Col xs={3}>Type:</Col>
              <Col xs={9}>
                {capitalizeFirstLetter(product.category)},{" "}
                {product.tags[1]
                  ? capitalizeFirstLetter(product.tags[1])
                  : capitalizeFirstLetter(product.tags[0])}
              </Col>
              {product.brand && (
                <>
                  <Col xs={3}>Brand:</Col>
                  <Col xs={9}>{product.brand}</Col>
                </>
              )}
              <Col xs={3}>Discount:</Col>
              <Col xs={9}>{product.discountPercentage}%</Col>
            </Row>

            <hr />

            <Row>
              <Col md={5} lg={4} className="mb-3">
                <label className="mb-1">Size</label>
                <select
                  className="form-select border border-secondary common-input"
                  value={selectedSize}
                  onChange={(e) => setSelectedSize(e.target.value)}
                >
                  <option value="">Select Size</option>
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>
                </select>
                {errorMessage.size && (
                  <p className="text-danger error">{errorMessage.size}</p>
                )}
              </Col>

              <Col md={5} lg={4} className="mb-3">
                <label className="mb-1">Color</label>
                <select
                  className="form-select border border-secondary common-input"
                  value={selectedColor}
                  onChange={(e) => setSelectedColor(e.target.value)}
                >
                  <option value="">Select Color</option>
                  <option value="Black">Black</option>
                  <option value="White">White</option>
                  <option value="Red">Red</option>
                </select>
                {errorMessage.color && (
                  <p className="text-danger error">{errorMessage.color}</p>
                )}
              </Col>
            </Row>

            <div className="mb-4">
              <label className="mb-1">Quantity</label>
              <input
                type="number"
                min="1"
                className="form-control text-center border border-secondary common-input"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>

            <Button
              className="padding-button shadow-0 m-2 ms-0"
              variant="warning"
              onClick={handleBuyNow}
            >
              BUY NOW
            </Button>
            <Button
              className="padding-button shadow-0 m-2 ms-0"
              variant="primary"
              onClick={handleAddToCart}
            >
              <FontAwesomeIcon icon={faCartShopping} /> ADD TO CART
            </Button>
          </Col>
        </Row>
      </section>

      {/* Related Products */}
      <RelatedProducts
        productId={product.id}
        primary={product.tags[0]}
        secondary={product.category}
      />

      {/* Toast Notifications */}
      <ToastNotification
        showToast={showCartToast}
        toggleToast={toggleCartToast}
        message="Product added to cart successfully!"
        variant="success"
      />
    </div>
  );
}

export default ProductDetails;
