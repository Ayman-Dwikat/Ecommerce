import Title from "./Title";
import Button from "react-bootstrap/Button";

const TotalAmount = ({ totalAmount, title, button, onClickButton }) => {
  return (
    <div className="">
      <Title text1={title} text2="TOTALS" className="text-start pb-1" />

      <div className="d-flex flex-column gap-0 mt-2">
        <div className="d-flex justify-content-between">
          <p className="m-0">Subtotal</p>
          <p className="m-0">$ {totalAmount.toFixed(2)}</p>
        </div>

        <hr className="my-2" />

        <div className="d-flex justify-content-between">
          <p className="m-0">Shipping Fee</p>
          <p className="m-0">$ 10.00</p>
        </div>

        <hr className="my-2" />

        <div className="d-flex justify-content-between fw-bold">
          <p>Total</p>
          <p>$ {(totalAmount + 10).toFixed(2)}</p>
        </div>

        <Button
          variant="dark"
          className="styled-button"
          onClick={onClickButton}
        >
          {button}
        </Button>
      </div>
    </div>
  );
};

export default TotalAmount;
