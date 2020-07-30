import React from 'react'
import s from './LastProjects.module.css'
import Project from './Project/Project'
import img1 from './Project/WorksInfo.jpg'
import img2 from './Project/WorksInfo2.jpg'
import img3 from './Project/WorksInfo3.jpg'

const LastProjects = () => {
    return <div className={s.LastProjects}>
        <div className={s.title}>ПОСЛЕДНИЕ РАБОТЫ</div>
        <div></div>
        <Project image={img1} title={'Шины и диски'}/>
        <Project image={img2} title={'Шины и диски'}/>
        <Project image={img3} title={'Шины и диски'}/>
        <div></div>
        <div className={s.orangeCrap}></div>
    </div>
}

export default LastProjects