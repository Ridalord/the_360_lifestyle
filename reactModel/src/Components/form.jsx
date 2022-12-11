import React from "react";


export default function Subform() {
    return (
        <section className="subscription-form">
            <form action="http://www.the360lifestyle.com/feedback.aspx" method="post" >
                <h1>Do you want to receive our articles as it drops?</h1>
                <p>Type in your email address to subscribe.</p>
                <input className="txtbx" type="mail" placeHolder="Enter email address" /><input className="sbmt" type="submit" value="Subscribe"/>
            </form>
        </section>
    )
}