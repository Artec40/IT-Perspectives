import React from 'react'
import s from './Team.module.scss'
import ArticlePreview from '../../common/ArticlePreview/ArticlePreview'
import Employee from '../../common/Employee/Employee'
import {AboutUsPageArticleTypeSelector, AboutUsPageEmployeeTypeSelector} from "../../../types/types";

type PropsType = {
    employees: Array<AboutUsPageEmployeeTypeSelector>
    articles: Array<AboutUsPageArticleTypeSelector>
}
const Team: React.FC<PropsType> = ({employees, articles}) => {

    let renderEmployees = (employees: Array<AboutUsPageEmployeeTypeSelector>) => {
        return employees.map((e) => <Employee key={e.id} id={e.id}
                                              image={e.image} name={e.name}/>)
    }
    let renderArticles = (articles: Array<AboutUsPageArticleTypeSelector>) => {
        return articles.map((e, i) => <ArticlePreview key={i} text={e.text} day={e.day}
                                                      name={e.name} image={e.image} link={e.link}/>)
    }

    return <div className={s.Team}>
        <h4 className={s.title}>НАША КОМАНДА</h4>
        {renderEmployees(employees)}
        {renderArticles(articles)}
    </div>
}

export default Team