import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

type messagePropsType = {
    message: string
}

type dialogItemPropsType = {
    name: string
    id: number
}
const DialogItem = (props: dialogItemPropsType) => {
    let path = "/dialogs/" + props.id

    return (<div className={s.dialog}>
            <NavLink className={s.dialog} to={path}>{props.name}</NavLink>
        </div>

    )
}

const Message = (props: messagePropsType) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

let dialogsData = [
    {id: 1, name: "Anastasiya"},
    {id: 2, name: "Natasha"},
    {id: 3, name: "Artem"},
    {id: 4, name: "Sasha"},
    {id: 5, name: "Evgeniy"},
    {id: 6, name: "Yuri"}
]

let messagesData = [
    {id:1, message: "Hi"},
    {id:2, message: "How are you?"},
    {id:3, message: "Manchester city"}
]

let dialogMap = dialogsData.map(d=><DialogItem id={d.id} name={d.name}/>)

let messageMap = messagesData.map(m=><Message message={m.message}/>)

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogMap}


            </div>
            <div className={s.messages}>
                {messageMap}

            </div>
        </div>
    )
}