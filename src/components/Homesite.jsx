import styled from "styled-components";
import Video from "../assets/video.mp4";
import { FaFacebook, FaYoutube, FaWhatsapp, FaInstagram } from "react-icons/fa";
export default function Hero() {
  return (
    <Section id="hero">
      <div className="background">
        <video src={Video} muted autoPlay loop></video>
      </div>
      <div className="content">
        <div className="title">
          <h1>TRAVEL TO EXPLORE</h1>
          <p>
            Discover the enchanting allure of Rwanda, where stunning landscapes,
            diverse wildlife, and welcoming locals beckon travelers to an
            unforgettable adventure!
          </p>
          <div className="social-icons">
            <a href="#">
              <FaFacebook />
            </a>
            <a href="#">
              <FaYoutube />
            </a>
            <a href="#">
              <FaWhatsapp />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
          </div>
        </div>

        <div className="search">
          <div className="container">
            <label htmlFor="">Where you want to go</label>
            <input type="text" placeholder="Search Your location" />
          </div>
          <div className="container">
            <label htmlFor="">Check-in</label>
            <input type="date" />
          </div>
          <div className="container">
            <label htmlFor="">Check-out</label>
            <input type="date" />
          </div>
          <button>Explore Now</button>
        </div>
      </div>
    </Section>
    
  );
}

const Section = styled.section`
  position: relative;
  margin-top: 2rem;
  width: 100%;
  height: 100%;

  .background {
    height: 100%;
    video {
      width: 100%;
      filter: brightness(90%);
      border-radius: 0.1rem;
    }
  }
  /* Add this CSS style for vertical arrangement */
  .social-icons {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 1rem;

    a {
      font-size: 1.5rem;
      color: #ffffff;
      transition: color 0.3s ease-in-out;
      margin-bottom: 0.5rem;

      &:hover {
        color: #ffcc00; /* Change the color on hover */
      }
    }
  }
  .title {
  }
  .content {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    z-index: 3;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    .title {
      color: white;
      h1 {
        font-size: 3rem;
        letter-spacing: 0.2rem;
      }
      p {
        text-align: center;
        padding: 0 30vw;
        margin-top: 0.5rem;
        font-size: 1.2rem;
      }
    }
    .search {
      display: flex;
      background-color: #ffffffce;
      padding: 0.5rem;
      border-radius: 0.5rem;
      .container {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 0 1.5rem;
        label {
          font-size: 1.1rem;
          color: #03045e;
        }
        input {
          background-color: transparent;
          border: none;
          text-align: center;
          color: black;
          &[type="date"] {
            padding-left: 3rem;
          }

          &::placeholder {
            color: black;
          }
          &:focus {
            outline: none;
          }
        }
      }
      button {
        padding: 1rem;
        cursor: pointer;
        border-radius: 0.3rem;
        border: none;
        color: white;
        background-color: #4361ee;
        font-size: 1.1rem;
        text-transform: uppercase;
        transition: 0.3s ease-in-out;
        &:hover {
          background-color: #023e8a;
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 980px) {
    height: 25rem;
    .background {
      background-color: palegreen;
      video {
        height: 90%;
      }
    }
    .content {
      .title {
        h1 {
          font-size: 1rem;
        }
        p {
          font-size: 0.8rem;
          padding: 1vw;
        }
      }
      .search {
        flex-direction: column;
        padding: 0.8rem;
        gap: 0.8rem;
        /* padding: 0; */
        .container {
          padding: 0 0.8rem;
          input[type="date"] {
            padding-left: 1rem;
          }
        }
        button {
          padding: 1rem;
          font-size: 1rem;
        }
        /* display: none; */
      }
    }
  }
`;
