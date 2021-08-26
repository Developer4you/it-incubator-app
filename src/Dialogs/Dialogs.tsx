import React from 'react';
import s from './Dialogs.module.css';

type DialogItemPropsType = {
  id: number
  name: string
}

type MessagePropsType = {
  id: number
  message: string
}

const dialogs: Array <DialogItemPropsType> = [
  {id: 1, name: 'Dimych'},
  {id: 2, name: 'Andrew'},
  {id: 3, name: 'Sveta'},
  {id: 4, name: 'Sasha'},
  {id: 5, name: 'Viktor'},
  {id: 6, name: 'Valera'}
]

const messages: Array <MessagePropsType> = [
  {id: 1, message: 'Hi'},
  {id: 2, message: 'How is your it-kamasutra?'},
  {id: 3, message: 'Yo'},
  {id: 4, message: 'Yo'},
  {id: 5, message: 'Yo'}
]

const DialogItem: React.FC <DialogItemPropsType> = (props) => {

    return <div className={s.dialog}>
        <div>{props.name}</div>
    </div>
}

const Message: React.FC <MessagePropsType> = (props) => {
    return <div className={s.dialog}>{props.message}</div>
}

const Dialogs = () => {

    let dialogsElements =  dialogs.map( d => <DialogItem name={d.name} id={d.id} />  );
    let messagesElements = messages.map( m => <Message id={m.id} message={m.message}/> );

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                { messagesElements }
            </div>
        </div>
    )
}

export default Dialogs;