import React, { useEffect, useState } from "react";
import { NavBar } from "../navBar/navbar";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import image from "../../img/Tsundoku-Home-Dark.png";
import image1 from "../../img/Tsundoku-Home-Light.png";
import image2 from "../../img/Tsundoku-List-Dark.png";
import image3 from "../../img/Tsundoku-List-Light.png";
import image4 from "../../img/Tsundoku-Page-Dark.png";
import image5 from "../../img/Tsundoku-Page-Light.png";
import image6 from "../../img/Tsundoku-Profile-Dark.png";
import image7 from "../../img/Tsundoku-Profile-Light.png";

import pic from "../../img/CareerConnectProfile.png";
import pic1 from "../../img/CareerConnectSearch.png";
import pic2 from "../../img/CareerConnectPost.png";
import pic3 from "../../img/CareerConnectPostins.png";
import pic4 from "../../img/CareerConnectApplicants.png";

export const ProjectModule = () => {
  const slideImages = [
    {
      url: `${image}`,
      caption: "Slide 1",
    },
    {
      url: `${image1}`,
      caption: "Slide 2",
    },
    {
      url: `${image2}`,
      caption: "Slide 3",
    },
    {
      url: `${image3}`,
      caption: "Slide 4",
    },
    {
      url: `${image4}`,
      caption: "Slide 5",
    },
    {
      url: `${image5}`,
      caption: "Slide 6",
    },
    {
      url: `${image6}`,
      caption: "Slide 7",
    },
    {
      url: `${image7}`,
      caption: "Slide 8",
    },
  ];

  const slideImages2 = [
    {
      url: `${pic}`,
      caption: "Slide 1",
    },
    {
      url: `${pic1}`,
      caption: "Slide 2",
    },
    {
      url: `${pic2}`,
      caption: "Slide 3",
    },
    {
      url: `${pic3}`,
      caption: "Slide 4",
    },
    {
      url: `${pic4}`,
      caption: "Slide 5",
    },
  ];

  return (
    <>
      <NavBar />
      <div>
        <h1 className="projectTitle">Projects</h1>
      </div>
      <section className="project">
        <div className="projectInfo">
          <h1 className="projectName">Tsundoku</h1>
          <p className="projectSourceCode">
            <b>Source Code: </b>
            <a href="https://github.com/Jacob-Folley/CapStone-Client">GitHub</a>
          </p>

          <div className="projectSkills">
            <b>Technologies: </b>
            React, JavaScript, HTML, CSS
          </div>
        </div>
        <div className="projectPage">
          <div className="slide-container">
            <Slide>
              {slideImages.map((slideImage, index) => (
                <div className="each-slide" key={index}>
                  <div
                    className=".react-slideshow-container"
                    style={{
                      backgroundImage: `url(${slideImage.url})`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "contain",
                    }}
                  >
                    {/* <span>{slideImage.caption}</span> */}
                  </div>
                </div>
              ))}
            </Slide>
          </div>
        </div>
      </section>

      <section className="project">
        <div className="projectInfo">
          <h1 className="projectName">Career Connect</h1>
          <p className="projectSourceCode">
            <b>Source Code: </b>
            <a href="https://github.com/Jacob-Folley/FrontEnd-Capstone">
              GitHub
            </a>
          </p>

          <div className="projectSkills">
            <b>Technologies: </b>
            React, JavaScript, HTML, CSS, Python, Django
          </div>
        </div>
        <div className="projectPage">
          <div className="slide-container">
            <Slide>
              {slideImages2.map((slideImage, index) => (
                <div className="each-slide" key={index}>
                  <div
                    className=".react-slideshow-container"
                    style={{
                      backgroundImage: `url(${slideImage.url})`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "contain",
                    }}
                  >
                    {/* <span>{slideImage.caption}</span> */}
                  </div>
                </div>
              ))}
            </Slide>
          </div>
        </div>
      </section>
    </>
  );
};
