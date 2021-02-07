import React from 'react'
import Link from 'next/link'
import s from './ProjectPreview.module.scss'

const ProjectPreview = (props) => {
    return <Link href={`/project/[id]`} as={`/project/${props.id}`}>
        <div className={s.Project}>
            <img src={props.image}/>
            <h4>{props.title}</h4>
        </div>
    </Link>
}

export default ProjectPreview