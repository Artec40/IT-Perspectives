import React from 'react'
import s from './ProjectPreview.module.scss'

const ProjectPreview = (props) => {
    return <div className={s.Project}>
            <img src={props.image}/>
            <h4>{props.title}</h4>
        </div>
}

export default ProjectPreview