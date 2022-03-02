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
                    <div><p>Hello, my name is</p></div>
                    <div><h1>JACOB FOLLEY</h1></div>
                    <div><h2>SOFTWARE ENGINEER</h2></div>
                    <div><p id="bio">Based in Nashville</p></div>
                </div>
            </div>
        
            <div id="projectAnchor"><ProjectModule /></div>
            <div id="skillsAnchor"><SkillModule /></div>
            <div id="contactAnchor"><ContactModule /></div>
        </>
    )
}