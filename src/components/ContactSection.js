import React from "react";
import styled from "styled-components";
import ContactInfoItem from "./ContactInfoItem";
import SectionTitle from "./SectionTitle";
import { MdEmail, MdLocalPhone } from "react-icons/md";
import ContactForm from "./ContactForm";

const ContactSectionStyle = styled.div`
  padding: 10rem 0;
  .contactSection__wrapper {
    display: flex;
    gap: 5rem;
    margin-top: 7rem;
    justify-content: space-between;
    position: relative;
  }
  .contactSection__wrapper::after {
    position: absolute;
    content: "";
    width: 2px;
    height: 50%;
    background-color: var(--gray-1);
    left: 50%;
    top: 30%;
    transform: translate(-50%, -50%);
  }
  .left {
    width: 100%;
    max-width: 500px;
  }
  .right {
    width: 100%;
    max-width: 500px;
  }
  @media only screen and (max-width: 768px) {
    .contactSection__wrapper {
      flex-direction: column;
    }
    .contactSection__wrapper::after {
      display: none;
    }
    .left,
    .right {
      width: 100%;
    }
    .right {
      padding: 4rem 2rem 2rem 2rem;
    }
  }
`;

export default function ContactSection() {
  return (
    <ContactSectionStyle>
      <div className="container">
        <SectionTitle heading="Contact" subHeading="Get in touch" />
        <div className="contactSection__wrapper">
          <div className="left">
            <ContactInfoItem
              icon={<MdLocalPhone />}
              text="+91-8072XXXX16"
              path="tel:8072XXXX16"
            />
            <ContactInfoItem
              icon={<MdEmail />}
              text="nesh.baskaran@gmail.com"
              path="mailto:nesh.baskaran@gmail.com"
            />
            <ContactInfoItem text="Thanjavur,TamilNadu" path='https://goo.gl/maps/xRgD4t5fe6xG9jYo9' />
          </div>
          <div className="right">
            <ContactForm />
          </div>
        </div>
      </div>
    </ContactSectionStyle>
  );
}
