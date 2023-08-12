// import React from "react";
import styled from "styled-components";
import avatarImage from "../assets/avatarImage.jpg";
export default function Testimonials() {
  return (
    <Section id="testimonials">
      <div className="title">
        <h2>Happy our Customers</h2>
      </div>
      <div className="testimonials">
        <div className="testimonial">
          <p>
            Wow, I can not say enough good things about this website! Their
            service is top-notch and truly exceeded my expectations.
          </p>
          <div className="info">
            <img src={avatarImage} alt="" />
            <div className="details">
              <h4>Kishan Sheth</h4>
              <span>any one in our group </span>
            </div>
          </div>
        </div>
        <div className="testimonial">
          <p>
            From the moment I reached out, they were responsive, helpful, and
            attentive to my needs
          </p>
          <div className="info">
            <img src={avatarImage} alt="" />
            <div className="details">
              <h4>Kishan Sheth</h4>
              <span>eric </span>
            </div>
          </div>
        </div>
        <div className="testimonial">
          <p>
            Absolutely impressed with their service! Quick response, excellent
            communication, and outstanding results. Highly recommended for
            anyone seeking a reliable and efficient solution
          </p>
          <div className="info">
            <img src={avatarImage} alt="" />
            <div className="details">
              <h4></h4>
              <span>CEO - Shashaan Web Solutions</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  margin: 5rem 3rem;
  .title {
    text-align: center;
    margin-bottom: 2rem;
  }
  .testimonials {
    display: flex;
    justify-content: center;
    margin: 0 2rem;
    gap: 2rem;
    .testimonial {
      background-color: aliceblue;
      padding: 2rem;
      border-radius: 0.5rem;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      transition: 0.3s ease-in-out;
      &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
      .info {
        display: flex;
        justify-content: center;
        gap: 1rem;
        align-items: center;
        margin-top: 1rem;
        img {
          border-radius: 3rem;
          height: 3rem;
        }
        .details {
          span {
            font-size: 0.9rem;
          }
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 768px) {
    .testimonials {
      flex-direction: column;
      margin: 0;
      .testimonial {
        justify-content: center;
        .info {
          flex-direction: column;
          justify-content: center;
        }
      }
    }
  }
`;
