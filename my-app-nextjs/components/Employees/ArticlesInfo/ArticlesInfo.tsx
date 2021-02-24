import React from 'react'
import s from './ArticlesInfo.module.scss'
import Article from '../../common/Articles/Article'
import { EmployeePageArticleTypeSelector } from '../../../types/types'

type propsType = {
    articles: Array<EmployeePageArticleTypeSelector>
}

const ArticlesInfo: React.FC<propsType> = ({articles}) => {

    let employeeArticles = articles.map((a, i) => <Article key={i}
                                                           title={a.title}
                                                           image={a.image}
                                                           description={a.description}/>)

    return <div className={s.articlesInfo}>
        <h3 className={s.title}>Статьи</h3>
        {employeeArticles}
    </div>
}

export default ArticlesInfo