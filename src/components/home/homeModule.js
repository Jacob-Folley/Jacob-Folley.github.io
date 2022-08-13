import React, { useEffect, useState } from "react";
import { NavBar } from "../navBar/navbar";
import { ProjectModule } from "../projects/projectModule";
import { SkillModule } from "../skills/skillModule";
import { ContactModule } from "../contact/contact";
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

export const HomeModule = () => {
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
      <div className="homeContainer">
        <div className="introContainer" id="homeAnchor">
          <div className="left">
            <h1 className="intro">
              Hello, my name is Jacob. I am a Software Engineer based in
              Nashville. I enjoy creating software that helps make people's
              lives better.{" "}
            </h1>
            <p>
              If you wish to contact me, please email me at{" "}
              <b>jakebfolley@gmail.com</b>
            </p>
          </div>
        </div>
      </div>

      <section className="project">
        <div className="projectInfo">
          <h1 className="projectName">Tsundoku</h1>
          <h3 className="projectSourceCode">
            <b>Source Code: </b>
            <a href="https://github.com/Jacob-Folley/CapStone-Client">GitHub</a>
          </h3>

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
          <h3 className="projectSourceCode">
            <b>Source Code: </b>
            <a href="https://github.com/Jacob-Folley/FrontEnd-Capstone">
              GitHub
            </a>
          </h3>

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

      <div className="links">
        <div className="social">
          <a
            href="https://docs.google.com/document/d/1vc-FrHDgSpF-oc-CAvBkGaflAUbF9qD30o6CKUx1UKs/edit?usp=sharing"
            target="_blank"
          >
            <img
              className="icon-resume"
              src={require("../icons/icon_resume.png")}
            />
          </a>
        </div>
        <div className="social">
          <a href="https://github.com/Jacob-Folley" target="_blank">
            <img
              className="icon-github"
              src={require("../navBar/Octocat.png")}
            />
          </a>
        </div>
        <div className="social">
          <a href="https://www.linkedin.com/in/jacobfolley/" target="_blank">
            <img
              className="icon-linkedin"
              src={require("../LinkedIn-Logos/LI-In-Bug.png")}
            />
          </a>
        </div>
      </div>

      {/* <div id="projectAnchor"><ProjectModule /></div>
            <div id="skillsAnchor"><SkillModule /></div>
            <div id="contactAnchor"><ContactModule /></div> */}

      {/* <div className="imageContainer">
            <div>
              <img className="homeImage" src={image} />
            </div>
          </div> */}
    </>
  );
};
