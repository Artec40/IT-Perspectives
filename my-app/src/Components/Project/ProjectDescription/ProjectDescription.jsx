import React from 'react'
import s from './ProjectDescription.module.css'

const ProjectDescription = (props) => {
    return <div className={s.ProjectDescription}>
        <div className={s.Title}>НАИМЕНОВАНИЕ ПРОДУКТА</div>
        <div>Описание проекта. Что клиент получит от нашего сотрудничества? Какую боль мы устраним у него? Почему именно
            мы?
        </div>
        <div><img
            src={'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/113px-React-icon.svg.png'}/>
            <img
                src={'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/113px-React-icon.svg.png'}/>
            <img
                src={'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/113px-React-icon.svg.png'}/>
            <img
                src={'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/113px-React-icon.svg.png'}/>
        </div>
    </div>
}

export default ProjectDescription