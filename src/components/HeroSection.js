import React from 'react';
import HeroImg from '../assets/images/hero_img.png';
import Button from './Button';
import PText from './PText';
import SocialMediaArrow from '../assets/images/social-media-arrow.svg';
import ScrollDownArrow from '../assets/images/scroll-down-arrow.svg';
import styled from 'styled-components';

const HeroStyles = styled.div`
  padding: 2rem 0;
  .hero {
    height: 100vh;
    min-height: 1100px;
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  .hero__heading {
    font-size: 2rem;
    margin-bottom: 0rem;
    position: relative;
    span {
      display: inline-block;
      width: 100%;
    }
    .hero__name {
      font-family: 'Montserrat SemiBold';
      font-size: 7rem;
      color: var(--white);
    }
  }
  .hero__img {
    max-width: 900px;
    width: 100%;
    height: 600px;
    margin: 0 auto;
    /* border: 2px solid var(--gray-1); */
  }
  .hero__img img {
    border-radius: 2rem;
    margin-top: 1rem;
  }
  .hero__info {
    margin-top: 3rem;
  }
  .hero_info_title {
    font-size: 3rem;
    margin-top: 2rem;
  }
  .hero__social,
  .hero__scrollDown {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: absolute;
    bottom: 20px;
    width: 50px;
  }
  .hero__social {
    left: 50px;
  }
  .hero__scrollDown {
    left: 1200px;
  }
  .hero__social__indicator,
  .hero__scrollDown {
    width: 50px;
    p {
      font-size: 1.6rem;
      transform: translateY(-70px) rotate(90deg);
      letter-spacing: 0.5rem;
      text-transform: uppercase;
    }
    img {
      max-height: 45px;
      width: 16px;
      margin: 0 auto;
      object-fit: contain;
    }
  }
  .hero__scrollDown {
    img {
      max-height: 70px;
    }
  }
  .hero__social__text {
    ul {
      li {
        margin-bottom: 1rem;
      }
      a {
        display: inline-block;
        font-size: 1.6rem;
        transform: rotate(-90deg);
        letter-spacing: 5px;
        margin-top: 2rem;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .hero {
      margin-right: 760px;
    }
    .hero__heading {
      font-size: 1.4rem;
      margin-bottom: 1rem;
      .hero__name {
        font-size: 4.5rem;
      }
    }
    .hero__img {
      height: 300px;
    }
    .hero__info {
      margin-top: 3rem;
    }
    .hero__social {
      left: 2px;
      bottom: 15%;
      width: 20px;
    }
    .hero__social__indicator {
      width: 20px;
      p {
        font-size: 1.2rem;
      }
      img {
        max-height: 22px;
      }
    }
    .hero__social__text {
      ul {
        li {
          a {
            font-size: 1rem;
            margin-bottom: 1rem;
          }
        }
      }
    }
    .hero__scrollDown {
      display: none;
    }
  }
`;

export default function HeroSection() {
  return (
    <HeroStyles>
      <div className='hero'>
        <div className='container'>
          <h1 className='hero__heading'>
            <span>Hello, This is </span>
            <span className='hero__name'>Vignesh</span>
          </h1>
          <div className='hero__img'>
            <img src={HeroImg} alt='' />
          </div>
          <div className='hero_info_title'>
            <h5>Turning Ideas into Stunning Digital Experiences</h5>
          </div>
          <div className='hero__info'>
            <PText>
              As a frontend developer, I bring designs to life with clean code, modern technologies,
              and a passion for user-focused experiences. Whether it’s building sleek websites or
              robust web apps, I craft solutions that engage and perform.
            </PText>
            <Button btnLink='/project' btnText='See my projects' />
          </div>
          <div className='hero__social'>
            <div className='hero__social__indicator'>
              <p>follow</p>
              <img src={SocialMediaArrow} alt='socialmediaarrow' />
            </div>
            <div className='hero__social__text'>
              <ul>
                <li>
                  <a href='https://linkedin.com/in/nesh-baskaran' target='_blank' rel='noreferrer'>
                    LI
                  </a>
                </li>
              </ul>
            </div>
            <div className='hero__scrollDown'>
              <p>scroll</p>
              <img src={ScrollDownArrow} alt='scrolldownarrow' />
            </div>
          </div>
        </div>
      </div>
    </HeroStyles>
  );
}
