import React, { useEffect, useState } from "react"
import { NavBar } from '../navBar/navbar'
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
import image from "../../img/Tsundoku-Home-Dark.png";
import image1 from "../../img/Tsundoku-Home-Light.png";
import image2 from "../../img/Tsundoku-List-Dark.png";
import image3 from "../../img/Tsundoku-List-Light.png";
import image4 from "../../img/Tsundoku-Page-Dark.png";
import image5 from "../../img/Tsundoku-Page-Light.png";
import image6 from "../../img/Tsundoku-Profile-Dark.png";
import image7 from "../../img/Tsundoku-Profile-Light.png";

export const ProjectModule = () => {

    const slideImages = [
        {
            url: `${image}`,
            caption: 'Slide 1'
        },
        {
            url: `${image1}`,
            caption: 'Slide 2'
        },
        {
            url: `${image2}`,
            caption: 'Slide 3'
        },
        {
            url: `${image3}`,
            caption: 'Slide 4'
        },
        {
            url: `${image4}`,
            caption: 'Slide 5'
        },
        {
            url: `${image5}`,
            caption: 'Slide 6'
        },
        {
            url: `${image6}`,
            caption: 'Slide 7'
        },
        {
            url: `${image7}`,
            caption: 'Slide 8'
        }
    ];

    return (
        <>
        <NavBar />
            <div><h1 className="projectTitle">Projects</h1></div>
            <section className="project">
                <div className="projectPage">
                    <div className="slide-container">
                        <Slide>
                            {slideImages.map((slideImage, index) => (
                                <div className="each-slide" key={index}>
                                    <div style={{
                                        'backgroundImage': `url(${slideImage.url})`, 'backgroundRepeat': "no-repeat", 'backgroundSize': "contain",
                                        height: '40vh', width: '40vw'
                                    }}>
                                        {/* <span>{slideImage.caption}</span> */}
                                    </div>
                                </div>
                            ))}
                        </Slide>
                    </div>


                </div>
                <div className="projectInfo">
                    <h3>Tsundoku</h3>
                    <p>A website that starts with four main types: Movies / Series / Anime / Books. The user can choose a category and see a list of each category. The user can filter by different categories and can specifically search by name. The user can view information about media and can add to their own list. The user will also be able to write a review and rate the show/book if they want.</p>

                    <h3>Motivation</h3>
                    <p>This application will solve searching for all different types of media by putting it all in one place and organizing a personal list in one application for the user.</p>

                    <h3>Technologies:</h3>
                    <p>React</p>
                    <p>HTML</p>
                    <p>CSS</p>

                </div>
            </section>


        </>
    )
}