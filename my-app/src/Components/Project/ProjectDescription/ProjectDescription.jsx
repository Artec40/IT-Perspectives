import React from 'react'
import s from './ProjectDescription.module.scss'

const ProjectDescription = ({project}) => {
    return <div className={s.ProjectDescription}>
        <h4>{project.projectName}</h4>
        <div>{project.projectDescription}</div>
        <div>
            <img src={project.projectTechnologyImage}/>
            <img src={project.projectTechnologyImage}/>
            <img src={project.projectTechnologyImage}/>
            <img src={project.projectTechnologyImage}/>
        </div>
    </div>
}

export default ProjectDescription