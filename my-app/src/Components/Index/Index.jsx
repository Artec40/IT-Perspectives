import React from 'react'
import s from './Index.module.css'
import CompanyName from './CompanyName/CompanyName'
import Description from './Description/Description'
import Projects from './Projects/Projects'
import Team from './Team/Team'

const Index = () => {
    return (<div className={s.Index}>
            <CompanyName/>
            <Description/>
            <Projects/>
            <Team/>
        </div>
    )
}

export default Index