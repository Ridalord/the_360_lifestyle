import React from "react"; 
import TopWrap from "./Components/topWrap";
import Recents from "./Components/rcntPosts";
import Subform from "./Components/form";
import Footer from "./Components/footer";
import Topfooter from "./Components/topFooter";
// import Contact from "./Components/contact";
// import mrWhiskers from "./img/black12.jpg"
// import mrRidwan from "./img/ridwan.jpg"
// import mrSkull from "./img/black 32.jpg"
// import mrParrot from "./img/black11.jpg"




export default function App() {
    return (
        <div className="container">
            <TopWrap/>
            <Recents/>
            <Subform />
            <Topfooter/>
            <Footer/>
        </div>
    )
}
