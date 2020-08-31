import React from 'react'
import ProjectDescription from './ProjectDescription/ProjectDescription'
import KillerFeature from './KillerFeature/KillerFeature'
import JustTryButton from './JustTryButton/JustTryButton'

const Project = ({project, killerFeature}) => {
    if (!project) return <></>
    return <div>
        <ProjectDescription project={project}/>
        <KillerFeature killerFeature={killerFeature}/>
        <JustTryButton/>
    </div>
}

export default Project