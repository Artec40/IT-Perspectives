import React from 'react'
import s from './AboutEmployee.module.scss'

type PropsType = {
    fullname: string
    company: string
    location: string
    website: string
    phone: string
    articlesCount: number
    personalInfo: string
}

const AboutEmployee: React.FC<PropsType> = ({
                                                fullname, company,
                                                location, website,
                                                phone, articlesCount,
                                                personalInfo
                                            }) => {
    return <div className={s.aboutEmployee}>
        <h4>О себе</h4>
        <div>Полное имя: {fullname}</div>
        <div>Компания: {company}</div>
        <div>Местоположение: {location}</div>
        <div>Вебсайт: {website}</div>
        <div>Телефон: {phone}</div>
        <div>Количество публикаций: {articlesCount}</div>
        <div className={s.padding_top}>Краткая характеристика: {personalInfo}</div>
    </div>
}

export default AboutEmployee