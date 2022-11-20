import React from "react";
import d from "./Navbar.module.css"
import {NavLink} from "react-router-dom";

export const Navbar = () => {
    return (<nav className={d.nav}>
            <div className={`${d.item} ${d.active}`}><NavLink to={"profile"} className={navData=>navData.isActive ? d.active: d.item}>Profile</NavLink></div>
            <div className={`${d.item} ${d.active}`}><NavLink to={"dialogs"} className={navData=>navData.isActive ? d.active: d.item}>Messages</NavLink></div>
            <div className={`${d.item} ${d.active}`}><NavLink to={"news"} className={navData=>navData.isActive ? d.active: d.item}>News</NavLink></div>
            <div className={`${d.item} ${d.active}`}><NavLink to={"music"} className={navData=>navData.isActive ? d.active: d.item}>Music</NavLink></div>
            <div className={`${d.item} ${d.active}`}><NavLink to={"settings"} className={navData=>navData.isActive ? d.active: d.item}>Settings</NavLink></div>

        </nav>

    )
}