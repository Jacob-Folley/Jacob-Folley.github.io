import React from "react"
import { Route } from "react-router-dom"
import { MainReact } from './components/mainReact'
import { HomeModule } from './components/home/homeModule'
import { ProjectModule } from './components/projects/projectModule'
import { SkillModule } from './components/skills/skillModule'
import { ContactModule } from './components/contact/contact'

const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/">
                <HomeModule />
            </Route>

            <Route exact path="/projects">
                <ProjectModule />
            </Route>

            <Route exact path="/mainReact">
                <MainReact />
            </Route>

            <Route exact path="/skills">
                <SkillModule />
            </Route>

            <Route exact path="/contact">
                <ContactModule />
            </Route>

        </>
    )
}

export default ApplicationViews