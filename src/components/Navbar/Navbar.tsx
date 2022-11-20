import React from "react";
import d from "./Navbar.module.css"
import {NavLink} from "react-router-dom";

export const Navbar = () => {
    return (<nav className={d.nav}>
            <div className={`${d.item} ${d.active}`}><NavLink to={"profile"}>Profile</NavLink></div>
            <div className={`${d.item} ${d.active}`}><NavLink to={"dialogs"}>Messages</NavLink></div>
            <div className={`${d.item} ${d.active}`}><NavLink to={"news"}>News</NavLink></div>
            <div className={`${d.item} ${d.active}`}><NavLink to={"music"}>Music</NavLink></div>
            <div className={`${d.item} ${d.active}`}><NavLink to={"settings"}>Settings</NavLink></div>

        </nav>

    )
}