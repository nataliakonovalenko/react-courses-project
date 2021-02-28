import React from "react";
import HeroImage from "../../assets/hero-img.jpg"
import "./Hero.scss"

export default function Hero() {
    return(
        <div className={"hero"}>
            <div className={"hero-image"} style={{ backgroundImage: `url(${HeroImage})` }}></div>
            <div className={"container"}>
                <form action="#" className={"search-form"}>
                    <input type="search" placeholder={"What do you want to watch?"}/>
                    <input className={"btn"} type="submit"/>
                </form>
            </div>
        </div>
    )
}