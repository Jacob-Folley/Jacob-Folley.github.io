import React, { useEffect, useState } from "react"
import { NavBar } from '../navBar/navbar'
import { ProjectModule } from '../projects/projectModule'
import { SkillModule } from '../skills/skillModule'
import { ContactModule } from '../contact/contact'

export const HomeModule = () => {

    return (
        <>
            <NavBar />
            <div className="homeContainer" id="homeAnchor">
                <div className="introduction">
                    <div className="top"><p>Hello, my name is</p></div>
                    <div className="left"><h1>JACOB FOLLEY</h1></div>
                    <div className="right"><h2>SOFTWARE ENGINEER</h2></div>
                    <div className="bottom"><p id="bio">Based in Nashville</p></div>
                </div>
            </div>
        
            {/* <div id="projectAnchor"><ProjectModule /></div>
            <div id="skillsAnchor"><SkillModule /></div>
            <div id="contactAnchor"><ContactModule /></div> */}
        </>
    )
}