import React from 'react'
import s from './Description.module.css'

const Description = (props) => {
    return (<div className={s.Description}>
            <div className={`${s.Description} ${s.title}`}> {props.title}</div>
            <div> {props.text}
            </div>
        </div>
    )
}

export default Description