import React from "react";

const BuyForm = ({ formData, onChange, errors }) => {
  return (
    <form className="d-flex flex-column gap-3">
      <div className="d-flex gap-3">
        <div className="w-50">
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            className="form-control"
            placeholder="First name"
            onChange={onChange}
          />
          {errors.firstName && (
            <p className="text-danger error">{errors.firstName}</p>
          )}
        </div>

        <div className="w-50">
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            className="form-control"
            placeholder="Last name"
            onChange={onChange}
          />
          {errors.lastName && (
            <p className="text-danger error">{errors.lastName}</p>
          )}
        </div>
      </div>

      <div>
        <input
          type="text"
          name="cardNumber"
          value={formData.cardNumber}
          className="form-control"
          placeholder="Card number"
          onChange={onChange}
          maxLength="16"
        />
        {errors.cardNumber && (
          <p className="text-danger error">{errors.cardNumber}</p>
        )}
      </div>

      <div className="d-flex gap-3">
        <div className="w-50">
          <input
            type="text"
            name="expires"
            value={formData.expires}
            className="form-control"
            placeholder="MM/YY"
            onChange={onChange}
            maxLength="5"
          />
          {errors.expires && (
            <p className="text-danger error">{errors.expires}</p>
          )}
        </div>

        <div className="w-50">
          <input
            type="number"
            name="cvv"
            value={formData.cvv}
            className="form-control"
            placeholder="CVV"
            onChange={onChange}
            maxLength="3"
          />
          {errors.cvv && <p className="text-danger error">{errors.cvv}</p>}
        </div>
      </div>

      <div className="d-flex gap-3">
        <div className="w-50">
          <input
            type="text"
            name="city"
            value={formData.city}
            className="form-control"
            placeholder="City"
            onChange={onChange}
          />
          {errors.city && <p className="text-danger error">{errors.city}</p>}
        </div>

        <div className="w-50">
          <input
            type="text"
            name="state"
            value={formData.state}
            className="form-control"
            placeholder="State"
            onChange={onChange}
          />
          {errors.state && <p className="text-danger error">{errors.state}</p>}
        </div>
      </div>

      <div>
        <input
          type="number"
          name="postCode"
          value={formData.postCode}
          className="form-control"
          placeholder="Postcode"
          onChange={onChange}
        />
        {errors.postCode && (
          <p className="text-danger error">{errors.postCode}</p>
        )}
      </div>

      <div>
        <input
          type="number"
          name="phone"
          value={formData.phone}
          className="form-control"
          placeholder="Phone"
          onChange={onChange}
        />
        {errors.phone && <p className="text-danger error">{errors.phone}</p>}
      </div>
    </form>
  );
};

export default BuyForm;
