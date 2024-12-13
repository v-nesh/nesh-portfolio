import React from 'react';
import PText from './PText';
import styled from 'styled-components';

const AboutItemStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 3rem;
  height: auto;
  position: relative;
  .title {
    font-size: 2.4rem;
    line-break: auto;
    width: 3rem;
  }
  .items {
    display: flex;
    gap: 2rem;
    position: absolute;
    left: 18rem;
  }
  .item {
    background-color: var(--deep-dark);
    padding: 1rem;
    border-radius: 8px;
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    .items {
      position: initial;
      gap: 0.2rem;
    }
    .title {
      font-size: 2rem;
      width: 100%;
    }
  }
  @media only screen and (max-width: 500px) {
    .items {
      position: initial;
      display: flex;
      flex-direction: column;
      gap: 1.2rem;
    }
    .item2 {
      min-width: 25rem;
    }
  }
`;

export default function Aboutinfoitem({ title = 'this is title', items = ['html', 'css'] }) {
  return (
    <AboutItemStyles>
      <div className='title'>{title}</div>
      <div className='items'>
        {items.map((item, index) => (
          <div className='item item2' key={index}>
            <PText>{item}</PText>
          </div>
        ))}
      </div>
    </AboutItemStyles>
  );
}
