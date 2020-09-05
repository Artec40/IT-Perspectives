import React from 'react'

const AboutEmployee = ({fullname, company, location, website, phone, articlesCount, personalInfo}) => {
    return <div>
        <h4>О себе</h4>
        <div>Полное имя: {fullname}</div>
        <div>Компания: {company}</div>
        <div>Местоположение: {location}</div>
        <div>Вебсайт: {website}</div>
        <div>Телефон: {phone}</div>
        <div>Количество публикаций: {articlesCount}</div>
        <div>Краткая характеристика: {personalInfo}</div>
    </div>
}

export default AboutEmployee