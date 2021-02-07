import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
    getCurrentProject,
    getCurrentKillerFeatures
} from '../../redux/aboutUs-selector'
import { setProjectPage } from '../../redux/aboutUs-reducer'
import ProjectDescription from './ProjectDescription/ProjectDescription'
import KillerFeature from './KillerFeature/KillerFeature'
import JustTryButton from './JustTryButton/JustTryButton'

const Project = ({serverSideProject, serverSideKillerFeatures}) => {

    const project = useSelector(state => getCurrentProject(state))
    const killerFeatures = useSelector(state => getCurrentKillerFeatures(state))

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(setProjectPage(serverSideProject, serverSideKillerFeatures))
    }, [dispatch])

    let projectKillerFeatures = killerFeatures.map((k, i) =>
        <KillerFeature key={i} title={k.title}
                       description={k.description}
                       image={k.image}/>)

    return <div>
        {(!project || !killerFeatures) &&
        <div>Loading...</div>}

        {project && killerFeatures &&
        <div>
            <ProjectDescription name={project.name}
                                description={project.description}
                                image={project.image}/>
            {projectKillerFeatures}
            <JustTryButton/>
        </div>}
    </div>
}

export default Project