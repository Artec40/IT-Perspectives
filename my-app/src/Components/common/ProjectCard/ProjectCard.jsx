import React from 'react'
import s from './ProjectCard.module.scss'
import { NavLink } from 'react-router-dom'

const ProjectCard = ({image, description, title, id}) => {
    return <div className={s.projectCard}>
        <img src={image}/>
        <h6>{title}</h6>
        <div className={s.description}>
            <div>{description}</div>
            <NavLink to={'/project/'+ id}>Читать далее</NavLink>
        </div>
    </div>
}

export default ProjectCard