import React from 'react';
import {NavLink} from "react-router-dom";
import s from "../Dialogs.module.css";

type dialogItemPropsType = {
    name: string
    id: number
}


export const DialogItem = (props: dialogItemPropsType) => {
    let path = "/dialogs/" + props.id

    return (<div>
            <NavLink className={s.dialog} to={path}>{props.name}</NavLink>
        </div>

    )
}
