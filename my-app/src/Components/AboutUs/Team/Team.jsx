import React from 'react'
import s from './Team.module.scss'
import Article from './Article/Article'
import Employee from '../../common/Employee/Employee'
import { NavLink } from 'react-router-dom'

const Team = ({employees, articles}) => {

    let renderEmployees = (employees) => {
        return employees.map((e) =>
            <NavLink className={s.NavLink} to={'/employee/' + e.id}>
                <Employee id={e.id} image={e.image} name={e.name}/>
            </NavLink>)
    }
    let renderArticles = (articles) => {
        return articles.map((e, i) => <Article key={i} text={e.text} day={e.day}
                                               name={e.name} image={e.image}
                                               link={e.link}/>)
    }

    return <div className={s.Team}>
        <h4 className={s.title}>НАША КОМАНДА</h4>
        {renderEmployees(employees)}
        {renderArticles(articles)}
    </div>
}

export default Team