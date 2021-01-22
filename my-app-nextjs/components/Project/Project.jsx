import React from 'react'
import ProjectDescription from './ProjectDescription/ProjectDescription'
import KillerFeature from './KillerFeature/KillerFeature'
import JustTryButton from './JustTryButton/JustTryButton'

const Project = ({
                     project,
                     killerFeatures
                 }) => {

    let projectKillerFeatures = killerFeatures.map((k, i) => <KillerFeature key={i}
                                                                         title={k.title}
                                                                         description={k.description}
                                                                         image={k.image}
    />)

    return <div>
        <ProjectDescription name={project.name}
                            description={project.description}
                            image={project.image}
        />
        {projectKillerFeatures}
        <JustTryButton/>
    </div>
}

export default Project