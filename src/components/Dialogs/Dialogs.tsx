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
            <NavLink to={path}>{props.name}</NavLink>
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


export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <DialogItem id={dialogsData[0].id} name={dialogsData[0].name}/>
                <DialogItem id={dialogsData[1].id} name={dialogsData[1].name}/>
                <DialogItem id={dialogsData[2].id} name={dialogsData[2].name}/>
                <DialogItem id={dialogsData[3].id} name={dialogsData[3].name}/>
                <DialogItem id={dialogsData[4].id} name={dialogsData[4].name}/>
                <DialogItem id={dialogsData[5].id} name={dialogsData[5].name}/>


            </div>
            <div className={s.messages}>
                <Message message="Hi"/>
                <Message message="How are you?"/>
                <Message message="Have a great day!"/>
            </div>
        </div>
    )
}