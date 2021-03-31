import React from 'react'
import {Form} from "react-final-form";
import {
    EmployeePageCurrentEmployeeTypeSelector,
    EmployeePageProjectTypeSelector
} from '../../../../types/types'
import AboutEmployee from '../EmployeeInfoData/AboutEmployee/AboutEmployee'
import LastActivity from '../EmployeeInfoData/LastActivity/LastActivity'
import EmployeeNameDataForm from "../../../common/Employee/EmployeeNameDataForm"
import s from '../EmployeeInfo.module.scss'

type PropsType = {
    employee: EmployeePageCurrentEmployeeTypeSelector
    projects: Array<EmployeePageProjectTypeSelector>
    changeNameSubmit: (formData: any) => Promise<void>
}

const EmployeeInfoDataForm: React.FC<PropsType> = ({employee, projects, changeNameSubmit}) => {
    return <Form
        onSubmit={changeNameSubmit} render={({handleSubmit}) => (
        <form onSubmit={handleSubmit}>
            <div className={s.employeeInfo}>
                <EmployeeNameDataForm image={employee.image}
                                      name={employee.name}/>
                <AboutEmployee fullname={employee.fullname}
                               company={employee.company}
                               location={employee.location}
                               website={employee.website}
                               phone={employee.phone}
                               articlesCount={employee.articlesCount}
                               personalInfo={employee.personalInfo}/>
                <LastActivity projects={projects}/>
                <button type='submit'>Сохранить</button>
            </div>
        </form>)}>
    </Form>
}

export default EmployeeInfoDataForm