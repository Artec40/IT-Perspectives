import React from 'react'
import s from './ProjectPreview.module.css'
import { NavLink } from 'react-router-dom'

//todo подправить верстку.
const ProjectPreview = (props) => {
    return <NavLink to={'/project/' + props.id}  style = {{textDecoration: 'none'}} className={s.Project}>
            <img src={props.image}/>
            <div className={s.Title}>{props.title}</div>
        </NavLink>
}

export default ProjectPreview