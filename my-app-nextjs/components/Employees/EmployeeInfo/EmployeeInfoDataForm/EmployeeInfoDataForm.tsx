import React from 'react'
import {Form} from "react-final-form";
import {
    EmployeePageCurrentEmployeeTypeSelector,
    EmployeePageProjectTypeSelector
} from '../../../../types/types'
import AboutEmployeeDataForm from './AboutEmployeeDataForm/AboutEmployeeDataForm'
import LastActivity from '../EmployeeInfoData/LastActivity/LastActivity'
import EmployeeNameDataForm from "../../../common/Employee/EmployeeNameDataForm"
import s from '../EmployeeInfo.module.scss'
import {employeeDataType} from "../../../../api/api";

type PropsType = {
    employee: EmployeePageCurrentEmployeeTypeSelector
    projects: Array<EmployeePageProjectTypeSelector>
    changeNameSubmit: (formData: employeeDataType) => Promise<void>
}

const EmployeeInfoDataForm: React.FC<PropsType> = ({employee, projects, changeNameSubmit}) => {
    return <Form
        onSubmit={changeNameSubmit} render={({handleSubmit}) => (
        <form onSubmit={handleSubmit}>
            <div className={s.employeeInfo}>
                <EmployeeNameDataForm image={employee.image}
                                      ShortName={employee.name}/>
                <AboutEmployeeDataForm FullName={employee.fullname}
                                       Company={employee.company}
                                       Location={employee.location}
                                       Website={employee.website}
                                       Phone={employee.phone}
                                       ArticlesCount={employee.articlesCount}
                                       PersonalInfo={employee.personalInfo}/>
                <LastActivity projects={projects}/>
                <button type='submit'>Сохранить</button>
            </div>
        </form>)}>
    </Form>
}

export default EmployeeInfoDataForm