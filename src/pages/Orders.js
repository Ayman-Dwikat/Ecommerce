import Title from "../components/Title";
import OrderItem from "../components/OrderItem";
import { useSelector } from "react-redux";
import { useState } from "react";
import ToastNotification from "../components/ToastNotification";

const Orders = () => {
  const { orderItems } = useSelector((state) => state.order);

  const [showRemoveToast, setShowRemoveToast] = useState(false);
  const toggleRemoveToast = () => setShowRemoveToast(!showRemoveToast);

  return (
    <div
      className="d-flex flex-column align-items-start gap-0 pt-5 border-top"
      style={{ minHeight: "calc(100vh - 503px)" }}
    >

      <div className="mb-4">
        <Title text1="YOUR" text2="ORDERS" className="p-0 m-0" />
      </div>

      {/* Map Products */}
      {orderItems.length > 0 ? (
        orderItems.map((product) => (
          <OrderItem
            key={product.id}
            product={product}
            ShowRemoveToast={() => setShowRemoveToast(true)}
          />
        ))
      ) : (
        <h6>There is no any order</h6>
      )}

      {/* Toast Notification */}
      <ToastNotification
        showToast={showRemoveToast}
        toggleToast={toggleRemoveToast}
        message="Product removed from orders successfully!"
        variant="danger"
      />
    </div>
  );
};

export default Orders;
