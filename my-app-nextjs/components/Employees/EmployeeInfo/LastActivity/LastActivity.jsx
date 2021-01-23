import React from 'react'
import ProjectCard from '../../../common/ProjectCard/ProjectCard'
import s from './LastActivity.module.scss'

const LastActivity = ({projects}) => {

    let employeeProjects = projects.map(p => <ProjectCard key={p.id}
                                                          image={p.image}
                                                          description={p.description}
                                                          title={p.title}/>)

    return <div>
        <h4 className={s.title}>Последняя активность</h4>
        {employeeProjects}
    </div>
}

export default LastActivity