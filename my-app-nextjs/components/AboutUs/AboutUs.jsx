import React from 'react'
import s from './AboutUs.module.scss'
import CompanyName from './CompanyName/CompanyName'
import Description from './Description/Description'
import LastProjects from './LastProjects/LastProjects'
import Team from './Team/Team'

const AboutUs = ({
                     name,
                     logo,
                     title,
                     description,
                     projects,
                     employees,
                     articles
                 }) => {
    return <div className={s.AboutUs}>
        <CompanyName name={name} logo={logo}/>
        <Description title={title} description={description}/>
        <LastProjects projects={projects}/>
        <Team employees={employees} articles={articles}/>
    </div>
}

export default AboutUs