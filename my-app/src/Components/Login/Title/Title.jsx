import React from 'react'
import s from './Title.module.css'

const Title = (props) => {
    return <div className={s.Title}>
        <div className={s.text}>{props.title}</div>

    </div>
}

export default Title