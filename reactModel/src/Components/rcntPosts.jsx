import React from "react";
import Posts from "./posts";
import recentData from "./recentData";


export default function Recents() {
    const postData = recentData.map(datum => {
        return (
            <Posts 
                key={datum.id}
                {...datum}
            />
        )
    })
    return (
        <section className="recents" id="posts">
            <h1>Recent Posts</h1>
            <div className="recent-posts">
                {postData}
            </div>
        </section>
    )
}