import React from "react";
import PText from "../components/PText";
// import Button from "../components/Button";
import styled from "styled-components";
import Aboutinfoitem from "../components/Aboutinfoitem";
import ContactBanner from "../components/ContactBanner";
import ButtonExternal from "./../components/ButtonExternal";

const AboutPageStyles = styled.div`
  padding: 20rem 0;
  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 5;
  }
  .about__subHeading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info_item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.5rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__subHeading {
      font-size: 1.8rem;
    }
  }
`;

export default function About() {
  return (
    <AboutPageStyles>
      <div className="container">
        <div className="top-section">
          <div className="left">
            <p className="about__subHeading">
              Hi, I am <span>Vignesh</span>
            </p>
            <h2 className="about__heading">A freelance Web Developer</h2>
            <div className="about__info">
              <PText>
                I am from Tamil Nadu, India. A place of beauty and nature. Since
                my childhood, i love art and design. I always try to design
                stuff with my unique point of view. I also love to create things
                that can be usefull to others.
                <br />
                <br />
                I started coding since I was in high school. Coding is also an
                art for me. I love it and now I have the opportunity to design
                along with the coding. I find it really interesting and I
                enjoyed the process a lot.
                <br />
              </PText>
            </div>
            <ButtonExternal
              btnText="Download Resume"
              btnLink="https://drive.google.com/uc?export=download&id=1J3q7UCn2oqOYiJzBxOhEdU8rNyK7oV-W"
            ></ButtonExternal>
          </div>
        </div>
        <div className="about__info__items">
          <div className="about__info_item">
            <h1 className="about__info__heading">Education</h1>
            <Aboutinfoitem
              title="School"
              items={["Kalyana Sundaram Higher Secondry School, Thanjavur"]}
            />
            <Aboutinfoitem
              title="College"
              items={["PRIST University, Thanjavur"]}
            />
          </div>
        </div>
        <div className="about__info__items">
          <div className="about__info_item">
            <h1 className="about__info__heading">Skills</h1>
            <Aboutinfoitem
              title="Frontend"
              items={[
                "ReactJs",
                "HTML",
                "Css",
                "Javascript",
                "Bootstrap",
                "Sass",
              ]}
            />
            {/* <Aboutinfoitem title="Backend" items={["C#", "PHP", "NodeJs"]} /> */}
            <Aboutinfoitem
              title="Database"
              items={["MySQL", "MySQL server", "Firebase"]}
            />
            <Aboutinfoitem
              title="Design"
              items={["After Effects", "PhotoShop", "Illustrator"]}
            />
            {/* <Aboutinfoitem
              title="Others"
              items={["MS Word", "Ms Excel", "Spreadsheet"]}
            /> */}
          </div>
        </div>
      </div>
      <ContactBanner />
    </AboutPageStyles>
  );
}
