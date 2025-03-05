import React from 'react';
import Button from './Button';
import PText from './PText';
import SectionTitle from './SectionTitle';
import AboutImg from '../assets/images/about_img_2.png';
import styled from 'styled-components';

const AboutSectionStyle = styled.div`
  padding: 10rem 0;
  .container {
    display: flex;
    align-items: center;
    flex-direction: flex-start;
    text-align: left;
  }
  .aboutSection__left,
  .aboutSection__right {
    flex: 1;
  }
  .section-title {
    text-align: left;
  }
  .para {
    margin-top: 2rem;
    margin-left: 0;
  }
  .aboutSection__Button {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
    margin-top: 2rem;
  }
  .abt_img {
    border-radius: 2rem;
  }
  @media only screen and (max-width: 950px) {
    .aboutSection__left {
      flex: 4;
    }
    .aboutSection__right {
      flex: 3;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      text-align: center;
    }
    .aboutSection__left,
    .aboutSection__right {
      width: 100%;
    }
    .aboutSection__right {
      margin-top: 2rem;
    }
    .section-title {
      text-align: center;
    }
    .para {
      margin: 0 auto;
      margin-top: 2rem;
    }
    .aboutSection__Button {
      flex-direction: column;
      gap: 0;
      .button-wrapper,
      a {
        width: 100%;
        text-align: center;
      }
    }
  }
`;

export default function AboutSection() {
  return (
    <AboutSectionStyle>
      <div className='container'>
        <div className='aboutSection__left'>
          <SectionTitle heading='About Me' subHeading='Let me introduce myself' />
          <PText>
            A passionate software developer dedicated to crafting seamless and visually striking
            digital experiences. With expertise in modern web technologies and an eye for design,
            the focus is on building responsive and userfriendly websites and applications that
            meet the highest standards. Every project is approached with a commitment to quality,
            functionality, and performance.
          </PText>
          <div className='aboutSection__Button'>
            <Button btnLink='/project' btnText='Works'></Button>
            <Button btnLink='/about' btnText='Read More' outline='true'></Button>
          </div>
        </div>
        <div className='aboutSection__right'>
          <img className='abt_img' src={AboutImg} alt='abtImg' />
        </div>
      </div>
    </AboutSectionStyle>
  );
}
