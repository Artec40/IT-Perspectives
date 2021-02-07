import React from 'react'
import s from './Article.module.scss'

const Article = ({title, image, description}) => {
    return <div className={s.article}>
        <img className={s.image} src={image}/>
        <div className={s.title}>{title}</div>
        <div className={s.description}>{description}</div>
        <div className={s.link} to={''}>Читать далее</div>
    </div>
}

export default Article