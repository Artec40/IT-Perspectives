import React from 'react'
import s from './Article.module.scss'
import { NavLink } from 'react-router-dom'

const Article = ({title, image, description}) => {
    return <div className={s.article}>
        <img className={s.image} src={image}/>
        <div className={s.title}>{title}</div>
        <div className={s.description}>{description}</div>
        <NavLink className={s.link} to={''}>Читать далее</NavLink>
    </div>
}

export default Article