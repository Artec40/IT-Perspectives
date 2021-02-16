import React from 'react'
import Link from 'next/link'
import s from './ProjectPreview.module.scss'

type PropsType ={
    id: number
    image: string
    title: string
}

const ProjectPreview: React.FC<PropsType> = ({id, image, title}) => {
    return <Link href={`/project/[id]`} as={`/project/${id}`}>
        <div className={s.Project}>
            <img src={image}/>
            <h4>{title}</h4>
        </div>
    </Link>
}

export default ProjectPreview