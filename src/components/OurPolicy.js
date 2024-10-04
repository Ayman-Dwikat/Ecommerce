import styled from "styled-components";
import { assets } from "../assets/assets";

const PolicyContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  text-align: center;
  padding: 5rem 0;
  color: #6c757d;
  font-weight: 600;
  gap: 2rem;

  @media (max-width: 768px) {
    gap: 0.9rem;
  }

  @media (max-width: 576px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

const PolicyItem = styled.div`
  text-align: center;
`;

const PolicyIcon = styled.img`
  width: 3rem;
  margin-bottom: 1.25rem;
`;

const PolicyTitle = styled.p`
  font-weight: 700;
  color: #333;
  margin-bottom: 0.4rem;
  font-size: 1.05rem;

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
`;

const PolicyDescription = styled.p`
  color: #999999;

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
`;

const OurPolicy = () => {
  return (
    <PolicyContainer>
      <PolicyItem>
        <PolicyIcon src={assets.exchange_icon} alt="Exchange Icon" />
        <PolicyTitle>Easy Exchange Policy</PolicyTitle>
        <PolicyDescription>
          We offer hassle free exchange policy
        </PolicyDescription>
      </PolicyItem>

      <PolicyItem>
        <PolicyIcon src={assets.quality_icon} alt="Quality Icon" />
        <PolicyTitle>7 Days Return Policy</PolicyTitle>
        <PolicyDescription>
          We provide 7 days free return policy
        </PolicyDescription>
      </PolicyItem>

      <PolicyItem>
        <PolicyIcon src={assets.support_img} alt="Support Icon" />
        <PolicyTitle>Best Customer Support</PolicyTitle>
        <PolicyDescription>We provide 24/7 customer support</PolicyDescription>
      </PolicyItem>
    </PolicyContainer>
  );
};

export default OurPolicy;
