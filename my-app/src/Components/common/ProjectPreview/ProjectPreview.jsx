import React from 'react'
import s from './ProjectPreview.module.scss'
import { NavLink } from 'react-router-dom'

const ProjectPreview = (props) => {
    return <NavLink to={'/project/' + props.id} className={s.Project}>
            <img src={props.image}/>
            <h4>{props.title}</h4>
        </NavLink>
}

export default ProjectPreview