import React, { useEffect, useState } from "react";
import { NavBar } from "../navBar/navbar";
import { ProjectModule } from "../projects/projectModule";
import { SkillModule } from "../skills/skillModule";
import { ContactModule } from "../contact/contact";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectCube,
} from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
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
              <a href="https://mail.google.com/mail/u/0/?fs=1&to=jakebfolley@gmail.com&su=SUBJECT&body=BODY&tf=cm">
                <b>jakebfolley@gmail.com</b>
              </a>
            </p>
          </div>
        </div>
      </div>

      <section className="projects">
        <div className="projectContainer" id="project2">
          <div className="slideShowContainer">
            <div className="test" id="color1">
              <Swiper
                // install Swiper modules
                modules={[
                  Navigation,
                  Pagination,
                  Scrollbar,
                  A11y,
                  Autoplay,
                  EffectCube,
                ]}
                spaceBetween={50}
                cssMode={true}
                speed={4000}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                //

                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log("slide change")}
              >
                <SwiperSlide className="swiperImg">
                  <img className="image" src={image} />
                </SwiperSlide>
                <SwiperSlide className="swiperImg">
                  <img className="image" src={image1} />
                </SwiperSlide>
                <SwiperSlide className="swiperImg">
                  <img className="image" src={image2} />
                </SwiperSlide>
                <SwiperSlide className="swiperImg">
                  <img className="image" src={image3} />
                </SwiperSlide>
                <SwiperSlide className="swiperImg">
                  <img className="image" src={image4} />
                </SwiperSlide>
                <SwiperSlide className="swiperImg">
                  <img className="image" src={image5} />
                </SwiperSlide>
                <SwiperSlide className="swiperImg">
                  <img className="image" src={image6} />
                </SwiperSlide>
                <SwiperSlide className="swiperImg">
                  <img className="image" src={image7} />
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="projectInformation">
              <div className="text">
                <div className="information">
                  <div>Tsundoku</div>
                  <div className="description">
                    A website that starts with four main types: Movies / Series
                    / Anime / Books. The user can choose a category and see a
                    list of each category. The user can filter by different
                    categories and can specifically search by name. The user can
                    view information about media and can add to their own list.
                    The user will also be able to write a review and rate the
                    show/book if they want.
                  </div>
                </div>
                <div>
                  <a href="https://github.com/Jacob-Folley/CapStone-Client">
                    <div className="Github">Github</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="projectContainer" id="project2">
          <div className="imageContainer">
            <div className="test" id="color2">
              <img className="image" src={require("../../img/noteApp.png")} />
            </div>
            <div className="projectInformation">
              <div className="text">
                <div className="information">
                  <div>Notes App</div>
                  <div className="description">
                    A simple note taking application that allows a user to
                    create quick notes that can be stored as well as a to do
                    list.
                  </div>
                </div>
                <div>
                  <a href="https://github.com/Jacob-Folley/CapStone-Client">
                    <div className="Github">Github</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="projectContainer" id="project3">
          <div className="slideShowContainer">
            <div className="test" id="color3">
              <Swiper
                // install Swiper modules
                modules={[
                  Navigation,
                  Pagination,
                  Scrollbar,
                  A11y,
                  Autoplay,
                  EffectCube,
                ]}
                spaceBetween={50}
                cssMode={true}
                speed={4000}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                //

                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log("slide change")}
              >
                <SwiperSlide className="swiperImg">
                  <img className="image" src={pic} />
                </SwiperSlide>

                <SwiperSlide className="swiperImg">
                  <img className="image" src={pic1} />
                </SwiperSlide>
                <SwiperSlide className="swiperImg">
                  <img className="image" src={pic2} />
                </SwiperSlide>
                <SwiperSlide className="swiperImg">
                  <img className="image" src={pic3} />
                </SwiperSlide>
                <SwiperSlide className="swiperImg">
                  <img className="image" src={pic4} />
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="projectInformation">
              <div className="text">
                <div className="information">
                  <div>Career Connect</div>
                  <div className="description">
                    A website that starts by choosing: Applicant / Employer. The
                    applicant can upload their resume, search for jobs, and keep
                    track of their job applications. An employer can post jobs,
                    search through applicants, and keep track of all their job
                    postings.
                  </div>
                </div>
                <div>
                  <a href="https://github.com/Jacob-Folley/CapStone-Client">
                    <div className="Github">Github</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr></hr>
      <div className="links">
        <div className="social">
          <a
            href="https://docs.google.com/document/d/1rPBiTPN9MdwAOJv-mgjpWn5WeqcKNkoVAWEgnppk1uc/edit?usp=sharing"
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

{
  /* <section className="project">
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
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              width: "100%",
            }}
          ></div>
        </div>
      ))}
    </Slide>
  </div>
</div>
</section>
<section className="project">
<div className="projectInfo">
  <h1 className="projectName">Notes</h1>
  <h3 className="projectSourceCode">
    <b>Source Code: </b>
    <a href="https://github.com/Jacob-Folley/NoteTaking">GitHub</a>
  </h3>

  <div className="projectSkills">
    <b>Technologies: </b>
    React, JavaScript, HTML, CSS, Python, Django
  </div>
</div>
<div className="projectPage">
  <div className="slide-container">
    <div>
      <img
        className="projectImg"
        src={require("../../img/noteApp.png")}
      ></img>
    </div>
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
            }}
          >
            {/* <span>{slideImage.caption}</span> */
}
//           </div>
//         </div>
//       ))}
//     </Slide>
//   </div>
// </div>
// </section> */}
