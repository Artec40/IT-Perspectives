import React from 'react'
import { EmployeePageProjectTypeSelector } from '../../../types/types'
import s from './ProjectCard.module.scss'

const ProjectCard: React.FC<EmployeePageProjectTypeSelector> = ({image, description, title}) => {
    return <div className={s.projectCard}>
        <img src={image}/>
        <h6>{title}</h6>
        <div className={s.description}>
            <div>{description}</div>
            <div>Читать далее</div>
        </div>
    </div>
}

export default ProjectCard