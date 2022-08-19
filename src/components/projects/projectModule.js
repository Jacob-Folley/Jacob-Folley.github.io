import React, { useEffect, useState } from "react";
import { NavBar } from "../navBar/navbar";

export const ProjectModule = () => {
  return (
    <>
      <NavBar />

      <div className="quoteContainer">
        <div className="quote">
          “If you want to be proud of yourself, then do things in which you can
          take pride” <br /> <br /> - Karen Horney
        </div>
      </div>

      <div className="aboutMeContainer">
        <div className="aboutImage">
          <img
            className="personalImg"
            src={require("../../img/IMG_1776.jpeg")}
          />
        </div>
        <div className="aboutBio">
          <h1>My Background</h1>
          <br />
          I studied Broadcast and Electronic Communications at San Francisco
          State University. This provided me an opportunity to learn about the
          psychology in which we enjoy different forms of media. While
          throughout college I took on many different types of jobs such as
          working in a kitchen to remodeling homes. These jobs helped teach me
          the value of hard work and problem solving. Each job had it’s own
          particular learning curves. As a result, I got to understand more
          about my learning patterns and gained many new skills. I found that
          through all of this, the most important skill is communication. Being
          able to communicate efficiently and properly is the start of learning
          and creating amazing things. I am very grateful for all my different
          types of experiences I have had. <br /> <br /> Growing up my mom was a
          computer lab teacher. Going to where she worked opened my eyes to the
          amazing things computers can do. I was first around all the original
          macintosh computers where I got to tinker with all the new
          applications that would be brought in to install. I immediately fell
          in love with what computers were able to do. As an adult, I always
          enjoyed coding and the amazing features of software, however I never
          thought of it as a possbile career until I started working at Cruise
          Automation.
          <br /> <br /> At Cruise Automation I got to experience the world of
          software development first hand. I tested autonomous vehicles
          throughout San Francisco getting to experience the amazing
          achievements that software engineering could do. Working around
          software engineers allowed me to realize my dream of a career in
          software development. When COVID happened, I had to move out of San
          Francisco because everything was shut down. After deciding to move to
          Nashville, I searched for my way into the software field and found
          Nashville Software School. Graduating from Nashville Software School I
          am ready to experience the world of Software Development.
          <br /> <br />
          Send me an email if you would like to connect,{" "}
          <a href="https://mail.google.com/mail/u/0/?fs=1&to=jakebfolley@gmail.com&su=SUBJECT&body=BODY&tf=cm">
            <b>jakebfolley@gmail.com</b>
          </a>
        </div>
      </div>

      <div className="personalContainer">
        <div className="personalTitle">More About Me!</div>
        <div className="personalInfo">
          <div className="personalSection">
            <div className="personalBlock">
              <h1>Rock Climbing</h1>
              <p>
                One of my favorite hobbies is rock climbing. I love rock
                climbing because it allows me to face my fear of heights and is
                a great way to connect with my body and problem solve at the
                same time.
              </p>
            </div>
            <div className="personalBlock right">
              <h1>Food</h1>
              <p>
                After working in the kitchen for a few years I have learned to
                love cooking all different types of food. I enjoy food from all
                parts of the world, but if I had to pick a favorite it would be
                the California Burrito from Albert Tacos. I highly recommend it!
              </p>
            </div>
          </div>
          <div className="personalSection">
            <div className="personalBlock">
              <h1>Reading</h1>
              <p>
                I love reading all different types of books from philosophy to
                magic realism to fantasy! I am always open to book suggestions!
              </p>
            </div>
            <div className="personalBlock right">
              <h1>Pets</h1>
              <p>
                Growing up I always had all different types of dogs, big and
                small. I've had a Shih Tzu, Rottweiler, German Shepherd, and
                Saint Bernard. However, currently I have two cats named Haku and
                Mushishi!
              </p>
            </div>
          </div>
          <div className="personalSection">
            <div className="personalBlock">
              <h1>Travel</h1>
              <p>
                It has always been a dream of mine to live in Japan. Currently,
                I am learning how to speak Japanese, so hopefully one day this
                dream comes true.
              </p>
            </div>
          </div>
        </div>
      </div>

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
    </>
  );
};
