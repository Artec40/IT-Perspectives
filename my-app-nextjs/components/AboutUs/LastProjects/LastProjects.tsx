import React from 'react'
import s from './LastProjects.module.scss'
import ProjectPreview from '../../common/ProjectPreview/ProjectPreview'
import {AboutUsPageProjectTypeSelector} from '../../../types/types'

type PropsType = {
    projects: Array<AboutUsPageProjectTypeSelector>
}

const LastProjects: React.FC<PropsType> = ({projects}) => {
    let projectsElements = projects.map((p) => <ProjectPreview key={p.id} id={p.id}
                                                               image={p.photo} title={p.name}/>)

    return <div className={s.LastProjects}>
        <h3 className={s.title}>ПОСЛЕДНИЕ РАБОТЫ</h3>
        {projectsElements}
        <div className={s.orangeCrap}></div>
    </div>
}

export default LastProjects