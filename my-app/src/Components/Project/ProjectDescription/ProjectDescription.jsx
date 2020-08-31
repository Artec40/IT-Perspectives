import React from 'react'
import s from './ProjectDescription.module.css'

const ProjectDescription = ({project}) => {
    return <div className={s.ProjectDescription}>
        <div className={s.Title}>{project.projectName}</div>
        <div>{project.projectDescription}</div>
        <div><img
            src={'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/113px-React-icon.svg.png'}/>
            <img
                src={'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/113px-React-icon.svg.png'}/>
            <img
                src={'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/113px-React-icon.svg.png'}/>
            <img
                src={'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/113px-React-icon.svg.png'}/>
        </div>
    </div>
}

export default ProjectDescription