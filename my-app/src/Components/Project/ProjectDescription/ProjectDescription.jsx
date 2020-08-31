import React from 'react'
import s from './ProjectDescription.module.css'
//todo ссылка на картинку из паблик не работает, нужно пофиксить.

const ProjectDescription = ({project}) => {
    return <div className={s.ProjectDescription}>
        <div className={s.Title}>{project.projectName}</div>
        <div>{project.projectDescription}</div>
        <div><img
            src={project.projectTechnologyImage}/>
            <img
                src={project.projectTechnologyImage}/>
            <img
                src={project.projectTechnologyImage}/>
            <img
                src={project.projectTechnologyImage}/>
        </div>
    </div>
}

export default ProjectDescription