import React from "react";
import facebook from "../img/facebook-wrap.svg"
import whatsapp from "../img/whatsapp-wrap.svg"
import instagram from "../img/instagram-wrap.svg"
import mail from "../img/mail-wrap.svg"


export default function Footer() {
    return (
        <footer>
            <div className="copyright">
                <ul className="contact">
                    <li>
                        <a href="https://www.facebook.com/The_360_Lifestyle_and_Travels-106592811992186" target="_blank" rel="noreferrer">
                            <img src={facebook} alt="Facebook link"/>
                        </a>
                    </li>
                    <li>
                        <a href="https://tinyurl.com/2p87bem2" target="_blank" rel="noreferrer">
                            <img src={whatsapp} alt="Whatsapp link"/>
                        </a>
                    </li>
                    <li>
                        <a href="https://instagram.com/the_360_travels?igshid=YmMyMTA2M2Y=" target="_blank" rel="noreferrer">
                            <img src={instagram} alt="Instagram link"/>
                        </a>
                    </li>
                    <li>
                        <a href="mailto:Admin@clickandknow.com.ng" target="_blank" rel="noreferrer">
                            <img src={mail} alt="email link"/>
                        </a>
                    </li>
                </ul>
                <div>
                    <p className="copy">&copy; 2022 All Rights Reserved by Halord</p>
                    <p className="tc" id="tc"><a href="https://www.privacypolicygenerator.info/live.php?token=ULL4IXQDXbQg3OMBuylDIHwObwx3wpCM" target="_blank" rel="noreferrer">Privacy Policy</a></p>
                </div>
            </div>
        </footer>
    )
}