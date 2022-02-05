import React from 'react';
import { dialigsPageTypes } from '../redux/state';
import s from './Dialogs.module.css';

type DialogItemPropsType = {
  id: number
  name: string
}

type MessagePropsType = {
  id: number
  message: string
}

const Dialogs = (props: dialigsPageTypes) => {

    const DialogItem: React.FC <DialogItemPropsType> = (props) => {
    return <div className={s.dialog}>
        <div>{props.name}</div>
    </div>
}
    const Message: React.FC <MessagePropsType> = (props) => {
    return <div className={s.dialog}>{props.message}</div>
}

    let dialogsElements =  props.dialogs.map( d => <DialogItem name={d.name} id={d.id} />  );
    let messagesElements = props.messages.map( m => <Message id={m.id} message={m.message}/> );

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.messagesItems}>
                { messagesElements }
            </div>
        </div>
    )
}

export default Dialogs;