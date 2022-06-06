
import "./FullScreenImage.css";
import React, {ReactElement} from "react";
import {bindReporter} from "web-vitals/dist/modules/lib/bindReporter";

interface FullScreenImageProps {
    type: "video" | "image";
    url: string;
    label?: string;
    text?: string | ReactElement;
}

export const FullScreenImage:React.FunctionComponent<FullScreenImageProps> = (props) => {


    let background;
    switch(props.type) {
        case "video":
            background = <video className="background"
                                src={props.url}
                                loop={true}
                                muted={true}
                                autoPlay={true}/>
            break;
        case "image":
            background = <img className="background"
                              src={props.url}
                              alt={"background"}/>
            break;
    }

    return <div className="FullScreenImage">
        { background }
        <div className="image-content">
            <h1 className="image-label">{props.label}</h1>
            <p className="image-text">{props.text}</p>
        </div>
    </div>;
}