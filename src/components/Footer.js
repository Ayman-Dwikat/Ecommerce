import styled from "styled-components";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const CustomFooter = styled.footer`
  .footer-content {
    display: flex;
    flex-direction: column;
    gap: 3.5rem;
    margin: 3rem 0 2rem;
    font-size: 0.92rem;
    color: rgb(75, 85, 99);

    @media (max-width: 768px) {
      gap: 1.5rem;
    }

    @media (min-width: 576px) {
      display: grid;
      grid-template-columns: 3fr 1fr 1fr;
    }
  }

  .footer-logo {
    width: 8rem;
    margin-bottom: 1.25rem;
  }

  .footer-text {
    font-family: serif;
    letter-spacing: 0.8px;
    max-width: 75%;

    @media (max-width: 992px) {
      max-width: 90%;
    }

    @media (max-width: 768px) {
      max-width: 90%;
      font-size: 0.9rem;
    }
  }

  .footer-title {
    font-size: 1.25rem;
    font-weight: 500;
    margin-bottom: 1.25rem;
    color: black;
  }

  .footer-list {
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  .top-hr {
    margin-top: 6rem;
    color: #666;
  }

  .footer-copyright {
    margin: 0;
    padding: 20px 0;
    text-align: center;
    font-size: 0.875rem;
    color: #222;
  }

  a {
    display: inline-block;
    color: rgb(75, 85, 99);
    text-decoration: none;
    transition: all 0.2s ease;
  }

  a:hover {
    color: rgb(20, 20, 20);
    transform: translateX(4px);
  }
`;

const Footer = () => {
  return (
    <CustomFooter>
      <hr className="top-hr" />
      <div className="footer-content">
        <div>
          <img src={assets.logo} className="footer-logo" alt="logo" />
          <p className="footer-text">
            Forever is an e-commerce leader offering a curated range of fashion,
            beauty, and lifestyle products. With trusted brands and a focus on
            quality, Forever provides a seamless shopping experience, making it
            the preferred choice for discerning customers.
          </p>
        </div>

        <div>
          <p className="footer-title">COMPANY</p>
          <ul className="footer-list">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About us</Link>
            </li>
            <li>
              <Link to="/contact">Contact us</Link>
            </li>
            <li>
              <Link to="/privacy-policy">Privacy policy</Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="footer-title">GET IN TOUCH</p>
          <ul className="footer-list">
            <li>
              <a href="tel:+970598937436">+970-598-937-436</a>
            </li>
            <li>
              <a href="mailto:ayman.dwikat.2001@gmail.com">
                ayman.dwikat.2001@gmail.com
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/ayman-dwikat-911a2b305/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <p className="footer-copyright border-top border-secondary-subtle">
          Copyright 2024@ aymandwikat.dev - All Right Reserved.
        </p>
      </div>
    </CustomFooter>
  );
};

export default Footer;
