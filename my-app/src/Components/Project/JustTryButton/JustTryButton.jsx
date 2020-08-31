import React from 'react'
import s from './JustTryButton.module.css'

const JustTryButton = (props) => {
    return <div className={s.JustTryButton}>
        <div className={s.Title}>Попробовать просто</div>
        <div><button>НАЧАТЬ</button></div>
    </div>
}

export default JustTryButton