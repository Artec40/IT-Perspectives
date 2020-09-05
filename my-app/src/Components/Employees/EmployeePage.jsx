import React from 'react'
import s from './EmployeePage.module.scss'
import EmployeeInfo from './EmployeeInfo/EmployeeInfo'

const EmployeePage = ({employee}) => {
    return <div>
        <h1 className={s.title}>Учётная запись</h1>
        <EmployeeInfo image={employee.image} name={employee.name}/>
        <div>Articles</div>
    </div>
}

export default EmployeePage