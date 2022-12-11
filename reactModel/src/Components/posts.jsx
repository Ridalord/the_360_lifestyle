import React from "react";


export default function Posts(props) {
    return (
        <div className="post" id={props.class}>
            <div className="col-1-1">
                <a href={props.link}>
                    <div className="post-content">
                        <ul>
                            <li>
                                <span>{props.category}</span>
                            </li>
                            <li>
                                <p>{props.date}</p>
                            </li>
                        </ul>
                        <h2>{props.title}</h2>
                    </div>
                </a>
            </div>
            <div className="col-1">
                <img src={props.img} alt="" className="post-img" />
            </div>
        </div>
    )
}