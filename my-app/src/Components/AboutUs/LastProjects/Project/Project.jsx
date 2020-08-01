import React from 'react'
import s from './Project.module.css'

const Project = (props) => {
    return <div className={s.Project}><a>
        <div><img src={props.image}/></div>
        <div>{props.title}</div>
    </a></div>
}

export default Project