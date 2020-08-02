import React from 'react'
import s from './AboutUs.module.css'
import CompanyName from './CompanyName/CompanyName'
import Description from './Description/Description'
import LastProjects from './LastProjects/LastProjects'
import Team from './Team/Team'

const AboutUs = (props) => {
    return <div className={s.AboutUs}>
        <CompanyName name={props.state.companyName.name} logo={props.state.companyName.logo}/>
        <Description title={props.state.description.title} text={props.state.description.text}/>
        <LastProjects state={props.state.projects}/>
        <Team state={props.state.employees}/>
    </div>
}

export default AboutUs