import React from 'react'
import s from './Description.module.css'

const Description = ({title, description}) => {
    return (<div className={s.Description}>
            <div className={`${s.Description} ${s.title}`}> {title}</div>
            <div> {description}</div>
        </div>
    )
}

export default Description