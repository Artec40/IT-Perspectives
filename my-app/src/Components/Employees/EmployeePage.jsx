import React from 'react'
import s from './EmployeePage.module.scss'
import EmployeeInfo from './EmployeeInfo/EmployeeInfo'

const EmployeePage = ({employee, projects}) => {
    return <div>
        <h1 className={s.title}>Учётная запись</h1>
        <EmployeeInfo employee={employee} projects={projects}/>
        <div>Articles</div>
    </div>
}

export default EmployeePage