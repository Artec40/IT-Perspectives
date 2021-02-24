import React from 'react'
import {EmployeePageArticleTypeSelector} from '../../../types/types'
import s from './Article.module.scss'

const Article: React.FC<EmployeePageArticleTypeSelector> = ({title, image, description}) => {
    return <div className={s.article}>
        <img className={s.image} src={image}/>
        <div className={s.title}>{title}</div>
        <div className={s.description}>{description}</div>
        <div className={s.link}>Читать далее</div>
    </div>
}

export default Article