import React from 'react'

const ProjectCard = ({image, description, title}) => {
    return <div>
        <img src={image}/>
        <span>{title}</span>
        <span><div>{description}</div><a>Читать далее</a></span>
    </div>
}

export default ProjectCard