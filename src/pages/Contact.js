import { Button, Row, Col } from "react-bootstrap";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";
import Title from "../components/Title";
import styled from "styled-components";

const Contact = () => {
  return (
    <div className="pt-5 border-top overflow-hidden">
      <Title text1="CONTACT" text2="US" className="p-0 m-0" />
      <Row className="mt-4 mb-5 pb-5 gap-5 gap-md-2 justify-content-center">
        <Col xs={12} sm={11} md={7} lg={6}>
          <img src={assets.contact_img} className="img-fluid" alt="Contact" />
        </Col>
        <Col xs={12} md={4} className="my-auto">
          <StyledHeading>Our Store</StyledHeading>
          <StyledParagraph>
            Beita, south of Nablus <br /> Suite 350, Nablus, Palestine
          </StyledParagraph>
          <StyledParagraph>
            Tel:{" "}
            <StyledLink href="tel:+970598937436">(970) 598-937-436</StyledLink>
          </StyledParagraph>
          <StyledParagraph>
            Email:{" "}
            <StyledLink href="mailto:ayman.dwikat.2001@gmail.com">
              ayman.dwikat.2001@gmail.com
            </StyledLink>
          </StyledParagraph>
          <StyledHeading className="mt-5">Careers at Forever</StyledHeading>
          <StyledParagraph>
            Learn more about our teams and job openings.
          </StyledParagraph>
          <Button variant="outline-dark" className="rounded-0 px-4 py-3">
            Explore Jobs
          </Button>
        </Col>
      </Row>

      <NewsletterBox />
    </div>
  );
};

const StyledHeading = styled.h5`
  opacity: 1;
  color: rgb(74, 86, 104);
`;

const StyledParagraph = styled.p`
  opacity: 0.9;
  color: rgb(74, 86, 104);
  margin-top: 1rem;
`;

const StyledLink = styled.a`
  display: inline-block;
  color: rgb(75, 85, 99);
  text-decoration: none;
  transition: all 0.2s ease;

  &:hover {
    color: rgb(50, 50, 50);
    transform: translateX(4px);
  }
`;

export default Contact;
