import { useNavigate } from "react-router-dom";
import { useState } from "react";
import TotalAmount from "../components/TotalAmount";
import Title from "../components/Title";
import BuyForm from "../components/BuyForm";
import { useDispatch, useSelector } from "react-redux";
import { placeOrder } from "../store/slices/orderSlice";

const Payment = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { orderTotalAmount } = useSelector((state) => state.order);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    cardNumber: "",
    expires: "",
    cvv: "", 
    city: "",
    state: "",
    postCode: "",
    phone: ""
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePlaceOrder = () => {
    const newErrors = {};

    // Basic validation for empty fields
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        newErrors[key] = `This field is required`;
      }
    });

    // Card number validation (16 digits)
    if (formData.cardNumber && !/^\d{16}$/.test(formData.cardNumber)) {
      newErrors.cardNumber = "Invalid card number";
    }

    // CVV validation (3 digits)
    if (formData.cvv && !/^\d{3}$/.test(formData.cvv)) {
      newErrors.cvv = "Invalid CVV";
    }

    // Expiration date validation (MM/YY)
    if (formData.expires && !/^\d{2}\/\d{2}$/.test(formData.expires)) {
      newErrors.expires = "Invalid expiration date (MM/YY)";
    }

    setErrors(newErrors);

    // If no errors, dispatch placeOrder action
    if (Object.keys(newErrors).length === 0) {
      dispatch(placeOrder());
      navigate("/orders");
    }
  };

  return (
    <div className="pt-5 border-top">
      <div className="d-flex flex-column align-items-start">
        <Title text1="PAYMENT" text2="INFORMATION" className="p-0 m-0" />
      </div>

      <div className="row">
        <div className="col-12 col-md-5 mt-5">
          <BuyForm
            formData={formData}
            onChange={handleInputChange}
            errors={errors}
          />
        </div>

        <div className="col-12 col-md"></div>

        <div className="col-12 col-md-5">
          <TotalAmount
            title="ORDER"
            totalAmount={orderTotalAmount}
            button="PLACE ORDER"
            onClickButton={handlePlaceOrder}
          />
        </div>
      </div>
    </div>
  );
};

export default Payment;
