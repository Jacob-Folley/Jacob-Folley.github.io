import React, { useEffect, useState } from "react";
import { useHistory, Link } from "react-router-dom";

export const NavBar = () => {
  const history = useHistory();

  const [state, setState] = useState("");

  const [change, setChange] = useState("");

  const lightModeCheck = () => {
    let lightMode = localStorage.getItem("lightMode");
    return lightMode;
  };

  useEffect(() => {
    setState(lightModeCheck());
  }, []);

  useEffect(() => {
    if (change == "enabled") {
    } else {
    }
  }, []);

  // lightModeCheck()

  // check if dark mode is enabled
  // if enabled, turn it off
  // if enabled turn it onClick

  const enableLightMode = () => {
    document.body.classList.add("lightmode");
    localStorage.setItem("lightMode", "enabled");
  };

  const disableLightMode = () => {
    document.body.classList.remove("lightmode");
    localStorage.setItem("lightMode", null);
  };

  if (lightModeCheck() === "enabled") {
    enableLightMode();
  }

  const light = () => {
    lightModeCheck();
    console.log(lightModeCheck());
    if (lightModeCheck() !== "enabled") {
      enableLightMode();
    }
  };

  const dark = () => {
    lightModeCheck();
    console.log(lightModeCheck());
    if (lightModeCheck() == "enabled") {
      disableLightMode();
    }
  };

  return (
    <>
      <section className="navBar">
        <div className="navBarContainer">
          <button
            className="lightDark"
            onClick={() => {
              lightModeCheck();
              console.log(lightModeCheck());
              if (lightModeCheck() !== "enabled") {
                enableLightMode();
              } else {
                disableLightMode();
              }
            }}
          ></button>
          <div className="iconHome">
            <Link to="/">Jacob Folley</Link>
          </div>

          <div className="iconCenter">
            <div className="icon">
              <Link to="/">work</Link>
            </div>
            <div className="icon">about me</div>
          </div>
        </div>
      </section>

      {/* <div className="socials">
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
              <a
                href="https://www.linkedin.com/in/jacobfolley/"
                target="_blank"
              >
                <img
                  className="icon-linkedin"
                  src={require("../LinkedIn-Logos/LI-In-Bug.png")}
                />
              </a>
            </div>
          </div> */}
    </>
  );
};
