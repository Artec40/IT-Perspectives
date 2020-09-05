import React from 'react'
import s from './EmployeeInfo.module.scss'
import AboutEmployee from './AboutEmployee/AboutEmployee'
import LastActivity from './LastActivity/LastActivity'
import Employee from '../../common/Employee/Employee'

const EmployeeInfo = ({employee, projects}) => {

    return <div className={s.employeeInfo}>
        <h4> Title </h4>
        <Employee image={employee.image} name={employee.name}/>
        <AboutEmployee fullname={employee.fullname} company={employee.company}
        location={employee.location} website={employee.website}
        phone={employee.phone} articlesCount={employee.articlesCount}
        personalInfo={employee.personalInfo}/>
        <LastActivity projects={projects}/>
    </div>
}

export default EmployeeInfo