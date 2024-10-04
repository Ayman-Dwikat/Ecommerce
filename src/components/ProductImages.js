import React from "react";
import { Col, Row } from "react-bootstrap";

const ProductImages = ({ images }) => {
  return (
    <div className="mb-3">
      <Row className="justify-content-center">
        {images.map((src, index) => (
          <Col xs={5} sm={6} lg={4} key={index} className="px-3 px-sm-0">
            <a
              data-fslightbox="mygalley"
              target="_blank"
              rel="noopener noreferrer"
              data-type="image"
              href={src}
            >
              <img
                className="product-images"
                src={src}
                alt={`Product Image ${index + 1}`}
              />
            </a>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ProductImages;
