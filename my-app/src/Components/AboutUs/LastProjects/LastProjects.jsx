import React from 'react'
import s from './LastProjects.module.css'
import Project from './Project/Project'

//todo убрать лишние дивы, которые были созданы для верстки.
const LastProjects = ({projects}) => {
    let projectsElements = projects.map((p, i)=> <Project key={i} image={p.photo} title={p.name}/>)

    return <div className={s.LastProjects}>
        <div className={s.title}>ПОСЛЕДНИЕ РАБОТЫ</div>
        <div></div>
        {projectsElements}
        <div></div>
        <div className={s.orangeCrap}></div>
    </div>
}

export default LastProjects