import React from "react"
import Logo from "../img/360 Lifestyle .png"
import menu from "../img/menu.svg"
import dropDown from "../script"

export default function Navbar() {
    return (
        <nav className="navbar">
            <div id="overlay" onClick={dropDown}></div>
            <ul className="nav-links" id="dropdownClick">
                <li className="logo"><a href="index.html"><img src={Logo} alt="Site Logo" className="logo-img" /></a></li>
                <li className="home links"><a href="index.html" className="selected hover">Home</a></li>
                <li className="lifestyle links"><a href="lifestyle.html" className="hover">Lifestyle</a></li>
                <li className="travel links"><a href="travel.html" className="hover">Travel</a></li>
                <li className="products links"><a href="products.html" className="hover">Products</a></li>
                <li className="about links"><a href="about.html" className="hover">About</a></li>
                <li class="drpdwn"><a href="javascript:void(0);" onClick={dropDown} ><img src={menu}  alt="" /></a>
                </li>
            </ul>
        </nav>
    )
}