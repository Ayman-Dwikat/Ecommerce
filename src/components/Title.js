import styled from "styled-components";

const TitleContainer = styled.div`
  text-align: center;
  padding-block: 5rem 2rem;

  @media (max-width: 768px) {
    padding-block: 4rem 1.5rem;
  }
`;

const TitleContent = styled.div`
  display: inline-flex;
  align-items: center;
  margin-bottom: 12px;
`;

const Heading = styled.p`
  font-size: 1.6rem;
  color: rgb(125, 125, 125);
  margin-bottom: 0;
  font-weight: 450;

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }

  @media (max-width: 576px) {
    font-size: 1.15rem;
  }

  span {
    color: black;
    opacity: 0.8;
  }
`;

const Line = styled.div`
  height: 2.5px;
  background-color: #414141e4;
  width: 44px;
  margin-left: 15px;

  @media (max-width: 768px) {
    height: 2px;
    width: 33px;
    margin-left: 10px;
  }

  @media (max-width: 576px) {
    width: 25px;
  }
`;

const Description = styled.p`
  font-size: 1.1rem;
  font-family: serif;
  letter-spacing: 0.8px;
  color: rgba(75, 85, 99, 1);

  @media (max-width: 768px) {
    font-size: 0.94rem;
  }
`;

const Title = ({ text1, text2, text3, className }) => {
  return (
    <TitleContainer className={className}>
      <TitleContent className={className}>
        <Heading>
          {text1} <span>{text2}</span>
        </Heading>
        <Line />
      </TitleContent>

      {text3 && <Description>{text3}</Description>}
    </TitleContainer>
  );
};

export default Title;
