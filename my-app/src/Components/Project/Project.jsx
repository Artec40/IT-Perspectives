import React from 'react'
import ProjectDescription from './ProjectDescription/ProjectDescription'
import KillerFeature from './KillerFeature/KillerFeature'
import JustTryButton from './JustTryButton/JustTryButton'

const Project = (props) => {
    return <div>
        <ProjectDescription/>
        <KillerFeature/>
        <JustTryButton/>
    </div>
}

export default Project