import React from 'react'
import s from './EmployeeInfo.module.scss'
import AboutEmployee from './AboutEmployee/AboutEmployee'
import LastActivity from './LastActivity/LastActivity'
import Employee from '../../common/Employee/Employee'
import {
    EmployeePageCurrentEmployeeTypeSelector,
    EmployeePageProjectTypeSelector
} from '../../../types/types'

type PropsType = {
    employee: EmployeePageCurrentEmployeeTypeSelector
    projects: Array<EmployeePageProjectTypeSelector>
}

const EmployeeInfo: React.FC<PropsType> = ({employee, projects}) => {
    return <div className={s.employeeInfo}>
        <Employee image={employee.image}
                  name={employee.name}
                  currentEmployeeId={employee.currentEmployeeId}
                  isComponentLinked={employee.isComponentLinked}/>
        <AboutEmployee fullname={employee.fullname}
                       company={employee.company}
                       location={employee.location}
                       website={employee.website}
                       phone={employee.phone}
                       articlesCount={employee.articlesCount}
                       personalInfo={employee.personalInfo}/>
        <LastActivity projects={projects}/>
    </div>
}

export default EmployeeInfo