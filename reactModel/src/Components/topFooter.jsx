import React from "react";
import Logo from "../img/360 Lifestyle .png"


export default function Topfooter() {
    return (
        <div className="top_footer">
            <ul className="lst1">
                <li className="blog_name">
                    <div>
                        <a href="index.html">
                            <img src={Logo} alt="Site Logo"/>
                        </a>
                    </div>
                </li>
                <li className="us">
                    <p>Get all you need to know in an easy to understand exclusive posts and news updates as well as step-by-step guides, from desk of Nigerians who are now permanent residences in diaspora.</p>
                </li>
            </ul>
            <ul className="lst2">
                <li className="ttl">
                    <h1>Links</h1>
                </li>
                <li>
                    <a href="lifestyle.html">Lifestyle</a>
                </li>
                <li>
                    <a href="travel.html">Travel</a>
                </li>
                <li>
                    <a href="products.html">Products</a>
                </li>
                <li>
                    <a href="about.html">About</a>
                </li>
            </ul>
            <ul className="back">
                <li className="tc">
                    <a href="#top">Back to top</a>
                </li>
            </ul>
        </div>
    )
}