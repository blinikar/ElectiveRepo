
import "./Portfolio.css";
import React from "react";
import {FullScreenImage} from "../FullScreenImage";
import {ProjectCard} from "../ProjectCard";

export const Portfolio:React.FunctionComponent = () => {
    return <div className="Portfolio">
        <FullScreenImage type={"video"}
                         url={"/nasa.webm"}
                         label={"Innovative frontend solutions"}
                         text={"Welcome to my portfolio website"} />

        <div className="cards">
            <ProjectCard type={"image"}
                         label={<span>Inno<br/>Print<br/>Bot</span>}
                         description={"Product manager / Frontend"}
                         url={"https://upload.wikimedia.org/wikipedia/commons/a/af/Buchdruck-15-jahrhundert_1.jpg"}
                         linkTo={"innoprintbot"}/>
            <ProjectCard type={"video"}
                         label={<span>This<br/>Site</span>}
                         description={"Frontend and design"}
                         url={"https://upload.wikimedia.org/wikipedia/commons/0/07/Black_Hole_light_cannot_escape.webm"}
                         linkTo={""}/>
            <ProjectCard type={"video"}
                         label={<span>Yet<br/>Another<br/>Site</span>}
                         description={"Will be available soon"}
                         url={"https://upload.wikimedia.org/wikipedia/commons/3/3c/Simulation_Reveals_Spiraling_Supermassive_Black_Holes.webm"}
                         linkTo={"interestingproject"}/>
        </div>
    </div>;
}