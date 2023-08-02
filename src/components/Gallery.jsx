import { useState } from "react";
import styled from "styled-components";
import GalleryImage1 from "../assets/akagera.jpg";
import GalleryImage2 from "../assets/ibigogwe.jpg";
import GalleryImage3 from "../assets/lake-kivu.jpg";
import GalleryImage4 from "../assets/musanze.jpg";
import Video1 from "../assets/video.mp4";
import Video2 from "../assets/video.mp4";
import Video3 from "../assets/video.mp4";
import Video4 from "../assets/video.mp4";

const Gallery = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleVideoMouseEnter = (event) => {
    event.target.play();
  };

  const handleVideoMouseLeave = (event) => {
    if (!isPlaying) {
      event.target.pause();
    }
  };

  const handleButtonClick = (event) => {
    setIsPlaying(!isPlaying);
    const video = event.currentTarget.previousSibling;
    if (!isPlaying) {
      video.play();
    } else {
      video.pause();
    }
  };

  return (
    <Section>
      <div className="title">
        <h2>Gallery to discover Rwanda</h2>
      </div>
      <div className="gallery">
        <div className="gallery-item">
          <img src={GalleryImage1} alt="Gallery 1" />
          <button className="play-button" onClick={handleButtonClick}>
            {isPlaying ? "Pause" : "Play"}
            <video
              src={Video1}
              loop
              muted
              playsInline
              onMouseEnter={handleVideoMouseEnter}
              onMouseLeave={handleVideoMouseLeave}
              onEnded={() => setIsPlaying(false)}
            ></video>
          </button>
        </div>
        <div className="gallery-item">
          <img src={GalleryImage2} alt="Gallery 2" />
          <button className="play-button" onClick={handleButtonClick}>
            {isPlaying ? "Pause" : "Play"}
            <video
              src={Video2}
              loop
              muted
              playsInline
              onMouseEnter={handleVideoMouseEnter}
              onMouseLeave={handleVideoMouseLeave}
              onEnded={() => setIsPlaying(false)}
            ></video>
          </button>
        </div>
        <div className="gallery-item">
          <img src={GalleryImage3} alt="Gallery 3" />
          <button className="play-button" onClick={handleButtonClick}>
            {isPlaying ? "Pause" : "Play"}
            <video
              src={Video3}
              loop
              muted
              playsInline
              onMouseEnter={handleVideoMouseEnter}
              onMouseLeave={handleVideoMouseLeave}
              onEnded={() => setIsPlaying(false)}
            ></video>
          </button>
        </div>
        <div className="gallery-item">
          <img src={GalleryImage4} alt="Gallery 4" />
          <button className="play-button" onClick={handleButtonClick}>
            {isPlaying ? "Pause" : "Play"}
            <video
              src={Video4}
              loop
              muted
              playsInline
              onMouseEnter={handleVideoMouseEnter}
              onMouseLeave={handleVideoMouseLeave}
              onEnded={() => setIsPlaying(false)}
            ></video>
          </button>
        </div>
      </div>
    </Section>
  );
};

const Section = styled.section`
  //  width: 100%;
  padding: 2rem;
  .title {
    text-align: center;
  }
  .gallery {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1rem;

    .gallery-item {
      position: relative;
      overflow: hidden;
      border-radius: 1rem;
      cursor: pointer;
      transition: transform 0.3s ease-in-out;

      img,
      video {
        width: 90%;
        height: 90%;
      }

      video {
        // position: absolute;
        // top: 0;
        // left: 0;
        z-index: -1;
        // opacity: 0;
        transition: opacity 0.3s ease-in-out;
        width: 100%;
        height: 100%;
      }

      .play-button {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 0.5rem 1rem;
        background-color: rgba(0, 0, 0, 0.5);
        color: #fff;
        border: none;
        border-radius: 0.3rem;
        cursor: pointer;
        transition: opacity 0.3s ease-in-out;

        &:hover {
          opacity: 0.8;
        }
      }

      &:hover {
        transform: scale(1.05);
        video {
          opacity: 1;
        }
      }
    }
  }
`;

export default Gallery;
