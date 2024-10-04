import { Row, Col } from "react-bootstrap";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";
import Title from "../components/Title";
import styled from "styled-components";

const About = () => {
  return (
    <div className="pt-5 border-top overflow-hidden">
      <Title text1="ABOUT" text2="US" className="p-0 m-0" />
      <Row className="mt-4 mb-5 pb-5 gap-4 gap-md-4 justify-content-center">
        {/* Image Section */}
        <Col xs={12} md={6} lg={5}>
          <StyledImage src={assets.hero_img2} alt="About Us" />
        </Col>

        {/* Text Section */}
        <Col xs={12} md={5} lg={6} className="my-auto">
          <StyledTextWrapper>
            <StyledParagraph>
              Forever was born out of a passion for innovation and a desire to
              revolutionize the way people shop online. Our journey began with a
              simple idea: to provide a platform where customers can easily
              discover, explore, and purchase a wide range of products from the
              comfort of their homes.
            </StyledParagraph>

            <StyledParagraph>
              Since our inception, we've worked tirelessly to curate a diverse
              selection of high-quality products that cater to every taste and
              preference. From fashion and beauty to electronics and home
              essentials, we offer an extensive collection sourced from trusted
              brands and suppliers.
            </StyledParagraph>

            <StyledHeading>Our Mission</StyledHeading>
            <StyledParagraph>
              Our mission at Forever is to empower customers with choice,
              convenience, and confidence. We're dedicated to providing a
              seamless shopping experience that exceeds expectations, from
              browsing and ordering to delivery and beyond.
            </StyledParagraph>
          </StyledTextWrapper>
        </Col>
      </Row>

      <Title text1="WHY" text2="CHOOSE US" className="pt-0 text-start" />
      <div className="mb-5 pb-5 d-flex flex-column flex-md-row">
        <div className="border border-secondary-subtle py-5 px-5">
          <StyledFeatureTitle>Quality Assurance:</StyledFeatureTitle>
          <StyledFeatureDescription>
            We meticulously select and vet each product to ensure it meets our
            stringent quality standards.
          </StyledFeatureDescription>
        </div>

        <div className="border border-secondary-subtle py-5 px-5">
          <StyledFeatureTitle>Convenience:</StyledFeatureTitle>
          <StyledFeatureDescription>
            With our user-friendly interface and hassle-free ordering process,
            shopping has never been easier.
          </StyledFeatureDescription>
        </div>

        <div className="border border-secondary-subtle py-5 px-5">
          <StyledFeatureTitle>Exceptional Service:</StyledFeatureTitle>
          <StyledFeatureDescription>
            Our team of dedicated professionals is here to assist you the way,
            ensuring your satisfaction is our top priority.
          </StyledFeatureDescription>
        </div>
      </div>

      <NewsletterBox />
    </div>
  );
};

const StyledImage = styled.img`
  width: 100%;

  @media (min-width: 768px) {
    min-height: 470px;
    min-width: 370px;
  }
`;

const StyledTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
`;

const StyledHeading = styled.b`
  color: rgb(74, 86, 104);
  font-weight: bold;
`;

const StyledParagraph = styled.p`
  opacity: 0.95;
  color: rgb(74, 86, 104);
`;

const StyledFeatureTitle = styled.p`
  font-weight: bold;
  font-size: 14.5px;
`;

const StyledFeatureDescription = styled.p`
  font-size: 14px;
  line-height: 1.3;
  color: rgb(80, 80, 80);
`;

export default About;
