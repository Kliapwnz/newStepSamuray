import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <div className={s.dialog + " " + s.active}>
                    <NavLink to="/dialogs/1">Anastasiya</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/2">Natasha</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/3">Artem </NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/4">Sasha</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/1">Evgeniy</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/1">Yuri</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>How are you?</div>
                <div className={s.message}>Have a great day!</div>
            </div>
        </div>
    )
}