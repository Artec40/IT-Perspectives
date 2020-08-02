import React from 'react'
import s from './LastProjects.module.css'
import Project from './Project/Project'

//todo убрать лишние дивы, которые были созданы для верстки.
const LastProjects = (props) => {

    let projectElements = props.state.map((p)=> <Project image={p.image} title={p.title}/>)

    return <div className={s.LastProjects}>
        <div className={s.title}>ПОСЛЕДНИЕ РАБОТЫ</div>
        <div></div>
        {projectElements}
        <div></div>
        <div className={s.orangeCrap}></div>
    </div>
}

export default LastProjects