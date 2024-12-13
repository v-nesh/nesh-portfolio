import React from 'react';
import PText from '../components/PText';
// import Button from "../components/Button";
import styled from 'styled-components';
import Aboutinfoitem from '../components/Aboutinfoitem';
import ContactBanner from '../components/ContactBanner';
import ButtonExternal from './../components/ButtonExternal';

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
  .title {
    font-size: 2.4rem;
    margin-top: 1rem;
    line-break: auto;
    width: 300;
  }
  .sub__title {
    font-size: 1.2rem;
    padding: 0.5rem 0.1rem;
    .sub__title_span {
      font-size: 1rem;
    }
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
    ul {
      padding: 1rem 0.3rem;
      li {
        p {
          font-size: 1.5rem;
          padding: 1rem 0rem;
        }
      }
    }
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
      <div className='container'>
        <div className='top-section'>
          <div className='left'>
            <p className='about__subHeading'>
              Hi, I am <span>Vignesh</span>
            </p>
            {/* <h2 className='about__heading'>A freelance Web Developer</h2> */}
            <div className='about__info'>
              <PText>
                A passionate web developer from Tamil Nadu, India, a place known for its natural
                beauty and rich culture. From a young age, I’ve had a deep love for art and design,
                always striving to approach creativity with a unique perspective. My goal is to
                build things that are not only visually appealing but also serve a meaningful
                purpose for others. My coding journey began in high school, and over the years, I’ve
                come to see coding as an art form. I love the process of blending design and
                functionality, and it excites me to bring ideas to life through clean, efficient
                code. Every project is an opportunity to push boundaries and create seamless,
                user-friendly web experiences.
                <br />
              </PText>
            </div>
            <ButtonExternal
              btnText='Download Resume'
              btnLink='https://drive.google.com/uc?export=download&id=1NrbHXzTtTp_35dFOhde-uIyFjzyZK2S0'
            ></ButtonExternal>
          </div>
        </div>
        <div className='about__info__items'>
          <div className='about__info_item'>
            <h1 className='about__info__heading'>Work Experience</h1>
            <div className='title'>Software Developer</div>
            <div className='sub__title'>
              TechSwing Solutions <span className='sub__title_span'>(March 2023 - Present)</span>
            </div>
            <div>
              <ul>
                <li>
                  <p>
                    Designed, developed, tested, and deployed features within established timelines.
                  </p>
                </li>
                <li>
                  <p>
                    Collaborated with developers to create dynamic and interactive user portals.
                  </p>
                </li>
                <li>
                  <p>
                    Optimized website performance by integrating caching mechanisms, improving load
                    times by up to 30%.
                  </p>
                </li>
                <li>
                  <p>
                    Addressed complex challenges using modern web development processes and best
                    practices.
                  </p>
                </li>
                <li>
                  <p>
                    Ensured that implemented technologies promoted efficiency, speed, and seamless
                    functionality.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='about__info__items'>
          <div className='about__info_item'>
            <h1 className='about__info__heading'>Education</h1>
            <Aboutinfoitem
              title='School'
              items={['Kalyana Sundaram Higher Secondry School, Thanjavur']}
            />
            <Aboutinfoitem title='College' items={['PRIST University, Thanjavur']} />
          </div>
        </div>
        <div className='about__info__items'>
          <div className='about__info_item'>
            <h1 className='about__info__heading'>Skills</h1>
            <Aboutinfoitem
              title='Frontend'
              items={[
                'ReactJs',
                'NextJs',
                'Typescript',
                'Javascript',
                'HTML',
                'CSS',
                'TailwindCSS',
                'Bootstrap',
                'Sass',
              ]}
            />
            {/* <Aboutinfoitem title="Backend" items={["C#", "PHP", "NodeJs"]} /> */}
            <Aboutinfoitem title='Database' items={['MySQL', 'Firebase']} />
            <Aboutinfoitem title='Version control' items={['Git', 'Gitlab']} />
            <Aboutinfoitem
              title='Design'
              items={['Figma', 'After Effects', 'Photoshop', 'Illustrator']}
            />
            <Aboutinfoitem title='DevOps' items={['Docker']} />
          </div>
        </div>
      </div>
      <ContactBanner />
    </AboutPageStyles>
  );
}
