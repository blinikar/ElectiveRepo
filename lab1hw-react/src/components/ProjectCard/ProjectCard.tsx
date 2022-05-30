import "./ProjectCard.css";
import React from "react";
import {Link} from "react-router-dom";

interface ProjectCardProps {
    type: "image" | "video";
    label: JSX.Element;
    description?: string;
    url?: string;
    linkTo: string;
}

export const ProjectCard:React.FunctionComponent<ProjectCardProps> = (props) => {

    let background;
    switch(props.type) {
        case "video":
            background = <video className="card-background"
                                src={props.url}
                                loop={true}
                                muted={true}
                                autoPlay={true} />
            break;
        case "image":
            background = <img className="card-background"
                              src={props.url}
                              alt={"background"}/>
            break;
    }

    return <Link to={props.linkTo}>
        <div className="ProjectCard">
            { background }
            <div className={"content-container"}>
                <h3>{props.label}</h3>
                <p>{props.description}</p>
            </div>
        </div>
    </Link>;
}