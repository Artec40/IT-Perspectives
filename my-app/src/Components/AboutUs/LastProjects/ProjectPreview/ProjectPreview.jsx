import React from 'react'
import s from './ProjectPreview.module.css'
import { NavLink } from 'react-router-dom'

const ProjectPreview = (props) => {
    debugger
    return <div className={s.Project}><a>
        <NavLink to={'/project/' + props.id} style={{textDecoration: 'none'}}>
        <div><img src={props.image}/></div>
        <div>{props.title}</div>
        </NavLink>
    </a></div>
}

export default ProjectPreview