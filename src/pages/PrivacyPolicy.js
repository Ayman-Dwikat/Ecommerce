import { Row, Col } from "react-bootstrap";
import Title from "../components/Title";
import styled from "styled-components";
import NewsletterBox from "../components/NewsletterBox";

const PrivacyPolicy = () => {
  return (
    <div className="pt-5 border-top overflow-hidden">
      {/* Page Title */}
      <Title text1="PRIVACY" text2="POLICY" className="p-0 m-0" />

      {/* Content Section */}
      <Row className="mt-4 mb-5 pb-5 gap-4 gap-md-4 justify-content-center">
        <Col xs={12} md={10} lg={8}>
          <StyledTextWrapper>
            <StyledHeading>Your Privacy Matters</StyledHeading>
            <StyledParagraph>
              At Forever, we are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner. This Privacy Policy outlines the types of personal information we collect, how we use and protect it, and the choices you have regarding your information.
            </StyledParagraph>

            <StyledHeading>Information We Collect</StyledHeading>
            <StyledParagraph>
              We collect various types of information in connection with the services we provide, including:
              <ul>
                <li>Personal identification information (name, email address, phone number, etc.)</li>
                <li>Purchase history and preferences</li>
                <li>Payment information</li>
                <li>Website usage data (via cookies and analytics tools)</li>
              </ul>
            </StyledParagraph>

            <StyledHeading>How We Use Your Information</StyledHeading>
            <StyledParagraph>
              The information we collect is used to:
              <ul>
                <li>Provide and improve our services</li>
                <li>Process transactions and communicate with you about orders</li>
                <li>Send promotional offers, updates, and newsletters (with your consent)</li>
                <li>Analyze website usage and improve the user experience</li>
              </ul>
            </StyledParagraph>

            <StyledHeading>Protecting Your Information</StyledHeading>
            <StyledParagraph>
              We use secure technologies and follow industry-standard practices to ensure that your personal data is protected against unauthorized access, use, or disclosure. This includes encryption of payment information and the use of secure servers.
            </StyledParagraph>

            <StyledHeading>Your Rights and Choices</StyledHeading>
            <StyledParagraph>
              You have the right to:
              <ul>
                <li>Access and review the personal information we hold about you</li>
                <li>Request corrections to your personal information</li>
                <li>Opt-out of promotional communications at any time</li>
                <li>Request deletion of your personal data (subject to legal obligations)</li>
              </ul>
            </StyledParagraph>

            <StyledHeading>Changes to Our Privacy Policy</StyledHeading>
            <StyledParagraph>
              We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any significant updates, and we encourage you to review this policy periodically.
            </StyledParagraph>

            <StyledParagraph>
              If you have any questions or concerns about this Privacy Policy or how we handle your personal information, please contact us at: 
              <StyledLink href="mailto:privacy@forever.com">privacy@forever.com</StyledLink>
            </StyledParagraph>
          </StyledTextWrapper>
        </Col>
      </Row>

      {/* Newsletter Section */}
      <NewsletterBox />
    </div>
  );
};

// Styled Components

const StyledTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const StyledHeading = styled.h5`
  color: rgb(74, 86, 104);
  font-weight: bold;
`;

const StyledParagraph = styled.p`
  opacity: 0.95;
  color: rgb(74, 86, 104);
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const StyledLink = styled.a`
  color: rgb(75, 85, 99);
  text-decoration: none;
  transition: all 0.2s ease;

  &:hover {
    color: rgb(50, 50, 50);
    transform: translateX(4px);
  }
`;

export default PrivacyPolicy;
