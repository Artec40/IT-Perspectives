import React from 'react'
import s from './ArticlesInfo.module.scss'
import Article from '../../common/Articles/Article'

const ArticlesInfo = ({articles}) => {

    let employeeArticles = articles.map(a => <Article title={a.title} image={a.image} description={a.description}/>)

    return <div className={s.articlesInfo}>
        <h3 className={s.title}>Статьи</h3>
        {employeeArticles}
    </div>
}

export default ArticlesInfo