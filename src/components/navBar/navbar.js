import React, { useEffect, useState } from "react";
import { useHistory, Link } from "react-router-dom";

export const NavBar = () => {
  const history = useHistory();
  const [state, setState] = useState("");
  const [icon, setIcon] = useState("sun");
  const [change, setChange] = useState("");

  const lightModeCheck = () => {
    let lightMode = localStorage.getItem("lightMode");
    console.log(lightMode);
    return lightMode;
  };

  useEffect(() => {
    lightDark();
  }, []);

  useEffect(() => {
    iconCheck();
  }, [state]);

  // lightModeCheck()

  // check if dark mode is enabled
  // if enabled, turn it off
  // if enabled turn it onClick

  //   const lightDarkIcon = () => {
  //     if (lightModeCheck() == null) {
  //       setIcon(image1);
  //     } else {
  //       setIcon(image2);
  //     }
  //   };

  const enableLightMode = () => {
    document.body.classList.add("lightmode");
    localStorage.setItem("lightMode", "enabled");
    lightDark();
  };

  const disableLightMode = () => {
    document.body.classList.remove("lightmode");
    localStorage.setItem("lightMode", null);
    lightDark();
  };

  //   if (lightModeCheck() === "enabled") {
  //     enableLightMode();
  //   }

  //   const light = () => {
  //     lightModeCheck();
  //     console.log(lightModeCheck());
  //     if (lightModeCheck() !== "enabled") {
  //       enableLightMode();
  //     }
  //   };

  //   const dark = () => {
  //     lightModeCheck();
  //     console.log(lightModeCheck());
  //     if (lightModeCheck() == "enabled") {
  //       disableLightMode();
  //     }
  //   };

  const iconCheck = () => {
    if (state === "enabled") {
      setIcon("moonn");
    } else {
      setIcon("sun");
    }
  };

  const lightDark = () => {
    setState(localStorage.getItem("lightMode"));
  };

  return (
    <>
      <section className="navBar">
        <div className="navBarContainer">
          {lightModeCheck() == null ? (
            <img
              className="lightDark"
              src={require(`/${icon}.png`)}
              onClick={() => {
                lightDark();
                console.log(lightModeCheck());
                if (lightModeCheck() !== "enabled") {
                  enableLightMode();
                } else {
                  disableLightMode();
                }
              }}
            ></img>
          ) : (
            <img
              className="lightDark"
              src={require(`/${icon}.png`)}
              onClick={() => {
                lightDark();
                console.log(lightModeCheck());
                if (lightModeCheck() !== "enabled") {
                  enableLightMode();
                } else {
                  disableLightMode();
                }
              }}
            ></img>
          )}
          {/* <button
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
          ></button> */}
          <div className="iconHome">
            <Link to="/">Jacob Folley</Link>
          </div>

          <div className="iconCenter">
            <div className="icon">
              <Link to="/">work</Link>
            </div>
            <div className="icon">
              <Link to="/projects">about me</Link>
            </div>
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
