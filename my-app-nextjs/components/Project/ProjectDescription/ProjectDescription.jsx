import React from 'react'
import s from './ProjectDescription.module.scss'

const ProjectDescription = ({name, description, image}) => {
    return <div className={s.ProjectDescription}>
        <h4>{name}</h4>
        <div>{description}</div>
        <div>
            <img src={image}/>
            <img src={image}/>
            <img src={image}/>
            <img src={image}/>
        </div>
    </div>
}

export default ProjectDescription