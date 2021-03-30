import {Field} from "react-final-form";
import React from "react";
import s from "./Employee.module.scss";

const EmployeeNameDataForm = ({name, image}) => {
    return (
        <div className={s.Employee}>
            <img src={image}/>
            <Field name='name' component='input' type='text' defaultValue={name}/>
        </div>

    )
}

export default EmployeeNameDataForm
