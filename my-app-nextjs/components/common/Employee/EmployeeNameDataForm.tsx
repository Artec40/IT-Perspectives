import React from "react";
import {Field} from "react-final-form";
import s from "./Employee.module.scss";

type PropsType = {
    ShortName: string
    image: string
}

const EmployeeNameDataForm: React.FC<PropsType> = ({ShortName, image}) => {
    return (
        <div className={s.Employee}>
            <img src={image}/>
            <Field name='ShortName' component='input' type='text' defaultValue={ShortName}/>
        </div>

    )
}

export default EmployeeNameDataForm
