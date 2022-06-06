import "./RandomNumberFact.css";
import React, {useEffect, useState} from "react";
import {FullScreenImage} from "../FullScreenImage";

const useRandomNumberFact = ():[string, CallableFunction] => {
    const [numberFact, setNumberFact] = useState<string>("Loading...");

    const getNumberFact = () => {
        fetch("http://numbersapi.com/random/math")
            .then((res) => res.text())
            .then((res) => {
                setNumberFact(res);
            });
    }

    useEffect(() => {
        getNumberFact();
    }, []);

    return [numberFact, getNumberFact];
}

export const RandomNumberFact:React.FunctionComponent = (props) => {

    const [fact, updateFact] = useRandomNumberFact();

    return <div>
        <FullScreenImage type={"image"}
                         url={"https://upload.wikimedia.org/wikipedia/commons/e/e0/Multispectral_Triangulum_Galaxy_%283_Channels%29.jpg"}
                         label={"This is a fact from Number API"}
                         text={fact}/>;

        <button className={"button"} onClick={() => {updateFact()}}>New Fact</button>
    </div>
}