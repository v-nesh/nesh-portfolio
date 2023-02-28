import React from "react";
import styled from "styled-components";
import FooterCol from "./FooterCol";
import PText from "./PText";

const FooterStyles = styled.div`
  padding-top: 10rem;
  background-color: var(--deep-dark);
  .container {
    display: flex;
    gap: 2.5rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .copyright {
    background-color: var(--deep-bg);
    text-align: left;
    padding: 1rem;
    margin-top: 5rem;
    .para {
      margin-left: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
          text-align: right;
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyles>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">Vignesh</h1>
          <PText>
            A Frontend focused Web Developer building the frontend of Websites
            and Web Applications that lead to the success of the overall product
          </PText>
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="Important Links"
            links={[
              {
                title: "Home",
                path: "/",
                type: "Link",
              },
              {
                title: "About",
                path: "/about",
                type: "Link",
              },
              {
                title: "Project",
                path: "/project",
                type: "Link",
              },
              {
                title: "Contact",
                path: "/contact",
                type: "Link",
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="Contact info"
            links={[
              {
                title: "+91-8072XXXX16",
                path: "tel:8072XXXX16",
              },
              {
                title: "nesh.baskaran@gmail.com",
                path: "mailto:nesh.baskaran@gmail.com",
              },
              {
                title: "Thanjavur",
                path: "https://goo.gl/maps/xRgD4t5fe6xG9jYo9",
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="Social links"
            links={[
              {
                title: "Github",
                path: "https://github.com/v-nesh",
              },
              {
                title: "LinkedIn",
                path: "https://linkedin.com/in/nesh-baskaran",
              },
              {
                title: "twitter",
                path: "https://twitter.com/",
              },
              {
                title: "Facebook",
                path: "https://www.facebook.com/",
              },
              {
                title: "Instagram",
                path: "https://www.instagram.com/",
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <PText>Design with &lt;3</PText>
        </div>
      </div>
    </FooterStyles>
  );
}
