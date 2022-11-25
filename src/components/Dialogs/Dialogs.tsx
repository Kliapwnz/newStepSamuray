import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

type messagePropsType = {
    message: string
}

type dialogItemPropsType = {
    name: string
    id: number
}
const DialogItem = (props:dialogItemPropsType) => {
    let path = "/dialogs/" + props.id

    return (<div className={s.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>

    )
}

const Message = (props:messagePropsType) => {
    return(
        <div className={s.message}>{props.message}</div>
    )
}

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <DialogItem id={1} name="Anastasiya" />
                <DialogItem id={2} name="Natasha" />
                <DialogItem id={3} name="Artem" />
                <DialogItem id={4} name="Sasha" />
                <DialogItem id={5} name="Evgeniy" />
                <DialogItem id={6} name="Yuri" />

            </div>
            <div className={s.messages}>
               <Message message="Hi"/>
               <Message message="How are you?"/>
               <Message message="Have a great day!"/>
            </div>
        </div>
    )
}