import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
import { Row, Col, Button } from "react-bootstrap";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { useDispatch } from "react-redux";
import { updateOrderStatus, removeOrderItem } from "../store/slices/orderSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const OrderItem = ({ product, ShowRemoveToast }) => {
  const dispatch = useDispatch();

  const handleRemoveOrder = () => {
    dispatch(removeOrderItem(product));
    ShowRemoveToast();
  };

  const styles = {
    label: {
      color: "#007bff",
      letterSpacing: "1px",
      textShadow: "1px 2px #558ABB",
    },
    detail: {
      fontStyle: "italic",
      color: "#6c757d",
      fontSize: "15px",
    },
  };

  return (
    <div className="order-item py-3 overflow-hidden border-top border-bottom w-100">
      <Row className="align-items-center gap-3 gap-sm-0">
        <Col
          xs={12}
          sm={12}
          md={5}
          className="d-flex flex-column flex-sm-row gap-4 text-sm-start text-center pe-0"
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

        <Col
          xs={12}
          sm={7}
          md={3}
          className="d-flex flex-column align-items-sm-start align-items-center p-0"
        >
          <p className="para-detail ms-sm-auto">
            <span style={styles.label}>DATE: </span>
            <span style={styles.detail}>{product.date}</span>
          </p>
          <p className="para-detail ms-sm-auto">
            <span style={styles.label}>QUANTITY: </span>
            <span style={styles.detail}>{product.quantity}</span>
          </p>
          <p className="para-detail ms-sm-auto">
            <span style={styles.label}>TOTAL PRICE: </span>
            <span style={styles.detail}>
              ${(product.quantity * product.price).toFixed(2)}
            </span>
          </p>
        </Col>

        <Col
          xs={12}
          sm={3}
          md={2}
          lg={3}
          className="d-flex flex-column align-items-center p-0"
        >
          {product.status === "Received" ? (
            <Button variant="primary">
              Received
              <FontAwesomeIcon
                icon={faCircleCheck}
                className="ms-2"
                style={{ color: "#eee" }}
              />
            </Button>
          ) : (
            <Button
              variant="outline-primary"
              onClick={() => dispatch(updateOrderStatus(product))}
            >
              Received
            </Button>
          )}
        </Col>

        <Col
          xs={12}
          sm={1}
          md={2}
          lg={1}
          className="d-flex justify-content-center align-items-end gap-1 p-0"
        >
          <OverlayTrigger
            placement="top"
            overlay={<Tooltip id="tooltip-product">View Product</Tooltip>}
          >
            <Link to={`/product/${product.id}`}>
              <img
                src={assets.file_icon}
                alt="View Product"
                className="action-icon"
              />
            </Link>
          </OverlayTrigger>
          {product.status === "Received" && (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip id="tooltip-remove">Remove Order</Tooltip>}
            >
              <img
                src={assets.bin_icon}
                alt="Remove Product"
                className="action-icon"
                onClick={handleRemoveOrder}
              />
            </OverlayTrigger>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default OrderItem;
