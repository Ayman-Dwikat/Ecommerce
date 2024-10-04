import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";

const Heading4 = styled.h4`
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const Heading6 = styled.h6`
  @media (max-width: 768px) {
    font-size: 0.875rem;
  }
`;

const CustomForm = styled.form`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 1.5rem auto;
  border: 1px solid #ced4da;
  width: 50%;
  transition: border 0.2s ease;

  &:focus-within {
    border: 0.095rem solid #666;
  }

  @media (max-width: 992px) {
    width: 65%;
  }

  @media (max-width: 768px) {
    width: 80%;
  }

  @media (max-width: 400px) {
    width: 100%;
    gap: 0.5rem;
  }
`;

const CustomInput = styled.input`
  flex: 1;
  outline: none;
  border: none;
  padding-left: 0.75rem;
  font-size: 1rem;

  @media (max-width: 576px) {
    width: 100%;
    font-size: 0.9rem;
  }
`;

const CustomButton = styled.button`
  background-color: black;
  color: white;
  font-size: 0.83rem;
  padding: 1rem 2.2rem;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #252525;
    color: #ddd;
    transition: all 0.2s ease;
  }

  @media (max-width: 576px) {
    font-size: 0.8rem;
    padding: 0.8rem 1rem;
  }
`;

const NewsletterBox = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("You have successfully subscribed.");
  };

  return (
    <div className="text-center">
      <Heading4>Subscribe now & get 20% off</Heading4>
      <Heading6 className="text-black-50 mt-3">
        Stay ahead with the latest trends, exclusive offers, and new arrivals
        straight to your inbox.
      </Heading6>
      <CustomForm onSubmit={handleSubmit}>
        <CustomInput type="email" placeholder="Enter your email" required />
        <CustomButton type="submit">SUBSCRIBE</CustomButton>
      </CustomForm>
    </div>
  );
};

export default NewsletterBox;
