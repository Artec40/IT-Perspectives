import React from 'react'
import { ProjectPageProjectTypeSelector } from '../../../types/types'
import s from './ProjectDescription.module.scss'

const ProjectDescription: React.FC<ProjectPageProjectTypeSelector> = ({name, description, image}) => {
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