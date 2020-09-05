import React from 'react'
import s from './EmployeeInfo.module.scss'
import AboutEmployee from './AboutEmployee/AboutEmployee'
import LastActivity from './LastActivity/LastActivity'
import Employee from '../../common/Employee/Employee'

const EmployeeInfo = ({employee, projects}) => {

    return <div className={s.employeeInfo}>
        <Employee className={s.employee} image={employee.image} name={employee.name}/>
        <AboutEmployee className={s.aboutEmployee}
                       fullname={employee.fullname}
                       company={employee.company}
                       location={employee.location}
                       website={employee.website}
                       phone={employee.phone}
                       articlesCount={employee.articlesCount}
                       personalInfo={employee.personalInfo}/>
        <LastActivity className={s.lastActivity} projects={projects}/>
    </div>
}

export default EmployeeInfo