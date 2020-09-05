import React from 'react'
import s from './EmployeeInfo.module.scss'
import AboutEmployee from './AboutEmployee/AboutEmployee'
import LastActivity from './LastActivity/LastActivity'
import Employee from '../../common/Employee/Employee'

const EmployeeInfo = ({image, name}) => {
    return <div className={s.employeeInfo}>
        <Employee image={image} name={name}/>
        <span><AboutEmployee/></span>
        <span><LastActivity/></span>
    </div>
}

export default EmployeeInfo