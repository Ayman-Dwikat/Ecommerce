import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { assets } from "../assets/assets";
import { Row, Col } from "react-bootstrap";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { useDispatch } from "react-redux";
import {
  removeItemFromCart,
  updateCartQuantity,
} from "../store/slices/cartSlice";
import { setItemsToBuy } from "../store/slices/orderSlice";

const CartItem = ({ product, onRemoveToast }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(product.quantity);

  const handleRemove = () => {
    dispatch(removeItemFromCart(product));
    onRemoveToast();
  };

  const handleBuyItem = () => {
    const itemToBuy = {
      ...product,
      quantity: product.quantity,
      size: product.size,
      color: product.color,
    };
    dispatch(setItemsToBuy([itemToBuy])); // Send array of products to purchase
    navigate("/payment");
  };

  const handleQuantityChange = (e) => {
    const newQuantity = Number(e.target.value);
    setQuantity(newQuantity);
    dispatch(
      updateCartQuantity({
        id: product.id,
        size: product.size,
        color: product.color,
        quantity: newQuantity,
      })
    );
  };

  return (
    <div className="cart-item py-3 overflow-hidden border-top border-bottom w-100">
      <Row className="align-items-center gap-4">
        <Col
          xs={12}
          sm={6}
          className="d-flex flex-column flex-sm-row gap-4 text-center text-sm-start pe-0"
        >
          <div className="div-img">
            <img src={product.images[0]} alt="" className="item-img" />
          </div>
          <div>
            <p className="item-title">{product.title}</p>
            <p className="item-price">${product.price}</p>
            <div className="d-flex gap-2 justify-content-center justify-content-sm-start">
              <p className="item-detail border">{product.size}</p>
              <p className="item-detail border">{product.color}</p>
            </div>
          </div>
        </Col>

        <Col xs={12} sm={3} className="d-flex flex-column align-items-center">
          <input
            type="number"
            min="1"
            className="form-control text-center border border-secondary"
            value={quantity}
            onChange={handleQuantityChange}
          />
        </Col>

        <Col
          xs={12}
          sm={1}
          md={2}
          className="d-flex justify-content-center align-items-end gap-2"
        >
          <OverlayTrigger
            placement="top"
            overlay={<Tooltip id="tooltip-view">View Product</Tooltip>}
          >
            <Link to={`/product/${product.id}`}>
              <img
                src={assets.file_icon}
                alt="View Product"
                className="action-icon"
              />
            </Link>
          </OverlayTrigger>
          <OverlayTrigger
            placement="top"
            overlay={<Tooltip id="tooltip-buy">Buy Now</Tooltip>}
          >
            <img
              src={assets.euro_sign}
              alt="Buy Product"
              className="action-icon"
              onClick={handleBuyItem}
            />
          </OverlayTrigger>
          <OverlayTrigger
            placement="top"
            overlay={<Tooltip id="tooltip-remove">Remove Product</Tooltip>}
          >
            <img
              src={assets.bin_icon}
              alt="Remove Product"
              className="action-icon"
              onClick={handleRemove}
            />
          </OverlayTrigger>
        </Col>
      </Row>
    </div>
  );
};

export default CartItem;
