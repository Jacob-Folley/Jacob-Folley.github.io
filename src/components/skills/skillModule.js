import React, { useEffect, useState } from "react"
import { NavBar } from '../navBar/navbar'

export const SkillModule = () => {

    return (
        <>
            <div className="skillContainer">
            <h1 className="skillTitle">Skills</h1>
            
            <div className="skills">
            <img className="skillObj" src={require("../icons/html-logo.png")} />
            <img className="skillObj" src={require("../icons/css-logo.png")} />
            <img className="skillObj" src={require("../icons/js-logo.png")} />
            <img className="skillObj" src={require("../icons/logo192.png")} />
            <img className="skillObj" src={require("../icons/python-logo.png")} />
            <img className="skillObj" src={require("../icons/django-logo.png")} />
            <img className="skillObj" src={require("../icons/sql-logo.png")} />
            <img className="skillObj" src={require("../icons/GitHub-Mark/PNG/GitHub-Mark-Light-120px-plus.png")} />
            </div>
            </div>
        </>
    )
}