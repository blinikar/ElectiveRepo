
import "./NoPage.css";
import React from "react";
import {FullScreenImage} from "../FullScreenImage";

export const NoPage:React.FunctionComponent = () => {
    return <FullScreenImage type={"image"}
                            url={"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/A_view_of_the_M87_supermassive_black_hole_in_polarised_light.tif/lossy-page1-2028px-A_view_of_the_M87_supermassive_black_hole_in_polarised_light.tif.jpg"}
                            label={"404"}
                            text={"This page not found"} />
}