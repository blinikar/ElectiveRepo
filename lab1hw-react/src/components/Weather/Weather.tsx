import "./Weather.css";
import React, {useEffect, useState} from "react";
import {FullScreenImage} from "../FullScreenImage";

interface WeatherData {
    region: string;
    currentConditions: {
        temp: {
            c: number;
            f: number;
        }
    }
}

interface WeatherError {
    status: string;
}

interface WeatherLoading {
    loading: boolean;
}

const useWeather = (initialLocation:string):[WeatherData|WeatherError|WeatherLoading, CallableFunction] => {

    const [weather, setNumberFact] = useState<WeatherData|WeatherError|WeatherLoading>({loading: true});

    const getWeather = (location:string) => {
        setNumberFact({loading: true});

        fetch("https://weatherdbi.herokuapp.com/data/weather/" + location)
            .then((res) => res.text())
            .then((res) => JSON.parse(res) as WeatherData|WeatherError)
            .then((res) => {setNumberFact(res)});
    }

    useEffect(() => {
        getWeather(initialLocation);
    }, []);

    return [weather, getWeather];
}

export const Weather:React.FunctionComponent = () => {

    const [weather, getWeather] = useWeather("innopolis");

    let label:string = "Loading...";
    if ((weather as WeatherData).currentConditions) {
        label = (weather as WeatherData).currentConditions.temp.c.toString() + " °C";
    } else if ((weather as WeatherError).status === "fail") {
        label = "Can't find this place";
    } else if ((weather as WeatherLoading).loading) {
        label = "Loading..."
    }

    let text:string = "Loading...";
    if ((weather as WeatherData).region) {
        text = "Weather in " + (weather as WeatherData).region;
    } else if ((weather as WeatherError).status === "fail") {
        text = "Error";
    } else if ((weather as WeatherLoading).loading) {
        text = "Loading...";
    }

    return <div>
        <form className={"form"} onSubmit={(e) => {
            e.preventDefault();
            getWeather(((e.target as HTMLFormElement)[0] as HTMLInputElement).value);
        }}>
            <input className={"input"} placeholder={"Location"} defaultValue={"Innopolis"}></input>
            <button className={"button"}>Update</button>
        </form>

        <FullScreenImage type={"image"}
                         url={"https://upload.wikimedia.org/wikipedia/commons/e/e0/Multispectral_Triangulum_Galaxy_%283_Channels%29.jpg"}
                         label={label}
                         text={text} />;
    </div>
}