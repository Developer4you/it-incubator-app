import React, {ChangeEvent, useState} from 'react';
import s from './TextInputWithButton.module.css';
import {SimpleButton} from '../Button/Button';

type PropsType = {
    textButton: string
    callback: (inputValue:string) => void
}

export const TextInputWithButton = (props: PropsType) => {

    const [inputValue, setInputValue] = useState('');

    const addPostHandler = () => {
        props.callback(inputValue)
        setInputValue("")
    }

    const pressKeyHandler = (e:React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key==="Enter") {
            e.preventDefault();
            addPostHandler()
        };
    }

    return (
        <div className={s.inputPostBox}>
            <textarea onKeyDown={e=>pressKeyHandler(e)} onChange={e => setInputValue(e.target.value)} value={inputValue}></textarea>
            <SimpleButton text="Add Post" callback={addPostHandler}/>
        </div>
    )
}