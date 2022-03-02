import React, { useEffect, useState } from "react"
import { NavBar } from '../navBar/navbar'
// import 'react-slideshow-image/dist/styles.css'
// import { Slide } from 'react-slideshow-image';

export const ProjectModule = () => {
    return (
        <>
            <div><h1 className="projectTitle">Projects</h1></div>
            <section className="project">
                <div className="projectPage">
                    {/* <img src="https://maxcdn.bootstrapcdn.com/bootstrap/"></img>
                    SlideShow */}
                </div> 
                <div className="projectInfo">
                    This is where I will talk about the project. Description, followed by why I decided to make it. 
                </div>
            </section>

            <section className="project">
                <div className="projectInfo1">
                    This is where I will talk about the project. Description, followed by why I decided to make it. 
                </div>
                <div className="projectPage">
                    {/* <img src="https://maxcdn.bootstrapcdn.com/bootstrap/"></img>
                    SlideShow */}
                </div> 
            </section>


            <section className="project">
                <div className="projectPage">
                    {/* <img src="https://maxcdn.bootstrapcdn.com/bootstrap/"></img>
                    SlideShow */}
                </div> 
                <div className="projectInfo">
                    This is where I will talk about the project. Description, followed by why I decided to make it. 
                </div>
            </section>
    
        </>
    )
}