import React from 'react'
import s from './LastProjects.module.css'
import ProjectPreview from './ProjectPreview/ProjectPreview'
//todo Переписать верстку так, чтобы для проектов был padding-left: 275px; padding-right: 291px;
const LastProjects = ({projects}) => {
    let projectsElements = projects.map((p) => <ProjectPreview id={p.id} image={p.photo} title={p.name}/>)

    return <div className={s.LastProjects}>
        <div className={s.title}>ПОСЛЕДНИЕ РАБОТЫ</div>
        {projectsElements}
        <div className={s.orangeCrap}></div>
    </div>
}

export default LastProjects