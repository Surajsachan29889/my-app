import React from "react";
import Header from "../header";
import ProCard from "./project-card";
import ProjectHero from "./project-hero";
import './styles-2.css';

function Projects(){
    return(
        <div className="Project">

            <Header/>
            <ProjectHero/>
            <div className="procardsec">
            <ProCard className="cards"/>
            </div>
        </div>
    );
}
export default Projects;