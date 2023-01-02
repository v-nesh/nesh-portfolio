import React from "react";
import styled from "styled-components";
import Button from "./Button";
import PText from "./PText";

const ContactBannerStyle = styled.div`
  padding: 10rem 0;
  .contactBanner__wrapper {
    background-color: var(--deep-dark);
    border-radius: 12px;
    padding: 5rem 0;
    text-align: center;
  }
`;

export default function ContactBanner() {
  return (
    <ContactBannerStyle>
      <div className="container">
        <div className="contactBanner__wrapper">
          <PText>For more details</PText>
          <Button btnText="Contact now" btnLink="/contact"></Button>
        </div>
      </div>
    </ContactBannerStyle>
  );
}
