import React from 'react'
import s from './Team.module.css'
import Article from './Article/Article'
import Employee from './Employee/Employee'
import img1 from './Employee/Worker.jpg'
import img2 from './Employee/Worker2.jpg'
import img3 from './Employee/Worker3.jpg'

const Team = () => {
    return <div className={s.Team}>
        <div className={s.title}>НАША КОМАНДА</div>
        <Employee image={img1} title={'Вася'}/>
        <Employee image={img2} title={'Петя'}/>
        <Employee image={img3} title={'Ихтиандр'}/>
        <Article text={'Yeah buddy Light Weight baby'} time={'1 ноября 2018г.'} name={'Вася'} image={img1}
                 link={'@ArnieLightWeight'}/>
        <Article text={'Yeah buddy Light Weight baby'} time={'1 ноября 2017г.'} name={'Петя'} image={img2}
                 link={'@RonnyLightWeight'}/>
        <Article text={'Yeah buddy Light Weight baby'} time={'1 ноября 2016г.'} name={'Вася'} image={img3}
                 link={'@GudokLightWeight'}/>
    </div>
}

export default Team