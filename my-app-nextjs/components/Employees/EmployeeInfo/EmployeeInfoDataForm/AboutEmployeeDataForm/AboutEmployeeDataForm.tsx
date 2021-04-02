import React from 'react'
import {Field} from "react-final-form";
import s from '../../EmployeeInfoData/AboutEmployee/AboutEmployee.module.scss'

type PropsType = {
    FullName: string
    Company: string
    Location: string
    Website: string
    Phone: string
    ArticlesCount: number
    PersonalInfo: string
}

const AboutEmployeeDataForm: React.FC<PropsType> = ({
                                                        FullName, Company,
                                                        Location, Website,
                                                        Phone, ArticlesCount,
                                                        PersonalInfo
                                                    }) => {
    return <div className={s.aboutEmployee}>
        <h4>О себе</h4>
        <div>Полное имя: <Field name='FullName' component='input'
                                type='text' defaultValue={FullName}/></div>
        <div>Компания: <Field name='Company' component='input'
                              type='text' defaultValue={Company}/></div>
        <div>Местоположение: <Field name='Location' component='input'
                                    type='text' defaultValue={Location}/></div>
        <div>Вебсайт: <Field name='Website' component='input'
                             type='text' defaultValue={Website}/></div>
        <div>Телефон: <Field name='Phone' component='input'
                             type='text' defaultValue={Phone}/></div>
        <div>Количество публикаций: <Field name='ArticlesCount' component='input'
                                           type='number' defaultValue={ArticlesCount}/></div>
        <div className={s.padding_top}>Краткая характеристика: <Field name='PersonalInfo' component='input'
                                                                      type='text' defaultValue={PersonalInfo}/></div>
    </div>
}

export default AboutEmployeeDataForm