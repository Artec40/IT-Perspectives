import React from 'react'
import s from './JustTryButton.module.scss'

const JustTryButton = (props) => {
    return <div className={s.JustTryButton}>
        <h5>Попробовать просто</h5>
        <div><button>НАЧАТЬ</button></div>
    </div>
}

export default JustTryButton