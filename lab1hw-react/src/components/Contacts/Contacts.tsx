
import "./Contacts.css";
import React from "react";
import {FullScreenImage} from "../FullScreenImage";

export const Contacts:React.FunctionComponent = () => {
    return <div>
        <FullScreenImage type={"image"}
                         url={"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/A_view_of_the_M87_supermassive_black_hole_in_polarised_light.tif/lossy-page1-2028px-A_view_of_the_M87_supermassive_black_hole_in_polarised_light.tif.jpg"}
                         label={"Contact me"}
                         text={"Contact me personally in Innopolis University"}/>
    </div>;
}