import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import { clearCart } from "../store/slices/cartSlice";
import { setItemsToBuy } from "../store/slices/orderSlice";

import Title from "../components/Title";
import CartItem from "../components/CartItem";
import ToastNotification from "../components/ToastNotification";
import TotalAmount from "../components/TotalAmount";

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cartItems, cartTotalAmount } = useSelector((state) => state.cart);

  const [showRemoveToast, setShowRemoveToast] = useState(false);
  const [showClearToast, setShowClearToast] = useState(false);

  const handleClearCart = () => {
    dispatch(clearCart());
    setShowClearToast(true);
  };

  const handleBuyItems = () => {
    if (cartItems.length > 0) {
      const itemsToBuy = cartItems.map((item) => ({
        ...item,
        quantity: item.quantity,
        size: item.size,
        color: item.color,
      }));
      dispatch(setItemsToBuy(itemsToBuy)); // Send array of all cart products to purchase
      navigate("/payment");
    }
  };

  return (
    <div className="pt-5 border-top">
      <div className="d-flex justify-content-between align-items-center w-100 mb-4">
        <Title text1="YOUR" text2="CART" className="p-0 m-0" />
        {cartItems.length > 0 && (
          <Button variant="dark" onClick={handleClearCart} className="padding-button">
            CLEAR CART
          </Button>
        )}
      </div>

      {/* Render Cart Items */}
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          product={item}
          onRemoveToast={() => setShowRemoveToast(true)}
        />
      ))}

      {/* Cart Total Amount */}
      <div className="row">
        <div className="col-12 col-md-7"></div>
        <div className="col-12 col-md-5">
          <TotalAmount
            title="CART"
            totalAmount={cartTotalAmount}
            button="PROCEED TO CHECKOUT"
            onClickButton={handleBuyItems}
          />
        </div>
      </div>

      {/* Toast Notifications */}
      <ToastNotification
        showToast={showRemoveToast}
        toggleToast={() => setShowRemoveToast(false)}
        message="Product removed from cart successfully!"
        variant="danger"
      />
      <ToastNotification
        showToast={showClearToast}
        toggleToast={() => setShowClearToast(false)}
        message="Cart cleared successfully!"
        variant="warning"
      />
    </div>
  );
};

export default Cart;
