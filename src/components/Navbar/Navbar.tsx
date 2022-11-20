import React from "react";
import d from "./Navbar.module.css"

export const Navbar = () => {
    return (<nav className={d.nav}>
            <div className={`${d.item} ${d.active}`}><a href={"profile"}>Profile</a></div>
            <div className={`${d.item} ${d.active}`}><a href={"dialogs"}>Messages</a></div>
            <div className={`${d.item} ${d.active}`}><a href={"news"}>News</a></div>
            <div className={`${d.item} ${d.active}`}><a href={"music"}>Music</a></div>
            <div className={`${d.item} ${d.active}`}><a href={"settings"}>Settings</a></div>

        </nav>

    )
}