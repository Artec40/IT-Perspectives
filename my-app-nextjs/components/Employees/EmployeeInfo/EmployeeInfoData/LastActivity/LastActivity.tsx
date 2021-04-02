import React from 'react'
import {EmployeePageProjectTypeSelector} from '../../../../../types/types'
import ProjectCard from '../../../../common/ProjectCard/ProjectCard'
import s from './LastActivity.module.scss'

type PropsType = {
    projects: Array<EmployeePageProjectTypeSelector>
}
const LastActivity: React.FC<PropsType> = ({projects}) => {

    const employeeProjects = projects.map((p, i) => <ProjectCard key={i}
                                                                 image={p.image}
                                                                 description={p.description}
                                                                 title={p.title}/>)

    return <div className={s.lastActivity}>
        <h4 className={s.title}>Последняя активность</h4>
        {employeeProjects}
    </div>
}

export default LastActivity