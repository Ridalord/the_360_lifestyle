import React from "react";
import Navbar from "./navbar";
import Intro from "./siteIntro";


export default function TopContent() {
    return (
        <div className="topContent">
            <Navbar />
            <Intro />
        </div>
    )
}