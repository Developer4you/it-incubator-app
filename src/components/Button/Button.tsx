import s from "./Button.module.css"

type PropsType = {
    text: string
    callback: ()=>void
}

export const SimpleButton = (props:PropsType) => {
    return (
        <button className={s.simpleButton} onClick={props.callback}>{props.text}</button>
    )
}