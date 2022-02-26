import React from 'react';
import preloader from "../../assets/images/gifpreloader2.gif";
import s from "./Preloader.module.css"

let Preloader = (props) => {
    return <div  className={s.preloader}>
        <img className={s.preloaderImg} src={preloader} />
    </div>
}

export default Preloader;