import React from "react";
import styled from "styled-components";
import PText from "./PText";
import MapImg from "../assets/images/mymap.png";

const MapStyles = styled.div`
  background: url(${MapImg}) no-repeat center / cover;
  min-height: 400px;
  .container {
    position: relative;
    min-height: 400px;
  }
  .map__card {
    position: absolute;
    right: 46%;
    bottom: 30%;
    padding: 2rem;
    background: var(--deep-dark);
    width: 100%;
    max-width: 300px;
    border-radius: 12px;
  }
  .map__card__heading {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  .map__card__link {
    display: inline-block;
    font-size: 1.6rem;
    margin-top: 3rem;
    text-decoration: underline;
  }

  @media only screen and (max-width: 768px) {
    background-position: 80% center;
    .map__card {
      position: absolute;
      right: 10%;
      bottom: 20%;
    }
    @media only screen and (max-width: 400px) {
      .map__card {
        max-width: none;
        right: auto;
      }
    }
  }
`;

export default function Map() {
  return (
    <MapStyles>
      <div className="container">
        <div className="map__card">
          <h3 className="map__card__heading">here is me</h3>
          <PText>Thanjavur,Tamil Nadu, India</PText>
          <a
            href="https://goo.gl/maps/ZDy9bcDBkNhibeSq5"
            target="_blank"
            rel="noreferrer"
            className="map__card__link"
          >
            Open in Google map
          </a>
        </div>
      </div>
    </MapStyles>
  );
}