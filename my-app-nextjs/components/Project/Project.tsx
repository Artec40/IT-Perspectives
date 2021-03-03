import React from 'react'
import {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {
    getCurrentProject,
    getCurrentKillerFeatures
} from '../../redux/aboutUs-selector'
import {aboutUsActions} from '../../redux/aboutUs-actions'
import ProjectDescription from './ProjectDescription/ProjectDescription'
import KillerFeature from './KillerFeature/KillerFeature'
import JustTryButton from './JustTryButton/JustTryButton'
import {
    ProjectType, KillerFeatureType,
    ProjectPageProjectTypeSelector,
    ProjectPageKillerFeatureTypeSelector
} from "../../types/types"
import {AppStateType} from "../../redux/redux-store";

type PropsType = {
    serverSideProject: ProjectType
    serverSideKillerFeatures: Array<KillerFeatureType>
}

const Project: React.FC<PropsType> = ({serverSideProject, serverSideKillerFeatures}) => {

    const project: ProjectPageProjectTypeSelector = useSelector((state: AppStateType) => getCurrentProject(state))
    const killerFeatures: Array<ProjectPageKillerFeatureTypeSelector> = useSelector((state: AppStateType) => getCurrentKillerFeatures(state))

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(aboutUsActions.setProjectPage(serverSideProject, serverSideKillerFeatures))
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