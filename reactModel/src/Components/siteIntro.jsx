import React from "react";
import arrow from "../img/arrow.png"


export default function Intro() {
    return (
        <div className="intro">
            <p>Hello! Welcome to </p>
            <h1>The <span>360</span>&nbsp; lifestyle<span>.</span> </h1>
            <p>Want to know the pros and cons of relocating to the great white north especially from African countries like Nigeria, Ghana, and the South Africa including a breakdown of all the bogous routes and which is best for you?</p>
            <p> Rather than searching around the internet, this is the one place to have it all.</p>
            <button className="arrow">
                <a href="#posts">
                    <img class="down" src={arrow} alt=""/>
                </a>
            </button>
        </div>
    )
}