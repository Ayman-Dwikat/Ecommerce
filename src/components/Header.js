import { assets } from "../assets/assets";
import { Row, Col } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

const Header = () => {
  return (
    <header className="header border border-dark-subtle">
      <Row>
        {/* Text Section */}
        <Col
          xs={12}
          md={5}
          className="d-flex align-items-center justify-content-center py-4 my-3 my-md-0 py-md-0"
        >
          <div>
            <div className="d-flex align-items-center gap-2">
              <p className="line"></p>
              <p className="fst-italic">OUR BESTSELLERS</p>
            </div>

            <h1 className="prata-regular py-md-1">Latest Arrivals</h1>

            <div className="d-flex align-items-center gap-2">
              <p className="fst-italic">SHOP NOW</p>
              <p className="line"></p>
            </div>
          </div>
        </Col>

        {/* Image Section */}
        <Col xs={12} md={7}>
          <Carousel className="carousel">
            <Carousel.Item interval={3000}>
              <img
                className="img-fluid"
                src={assets.hero_img}
                alt="Hero Image"
              />
              <Carousel.Caption>
                <h5>Our Most Popular Product</h5>
                <p>
                  Discover the features and benefits of our best-selling item.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img
                className="img-fluid"
                src={assets.hero_img2}
                alt="Hero Image"
              />
              <Carousel.Caption>
                <h5>Special Offer: 50% Off</h5>
                <p>
                  Don't miss out on our limited-time offer on selected items.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img
                className="img-fluid"
                src={assets.hero_img3}
                alt="Hero Image"
              />
              <Carousel.Caption>
                <h5>Experience Seamless Shopping</h5>
                <p>
                  Enjoy a smooth and user-friendly shopping experience with us.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </header>
  );
};

export default Header;
