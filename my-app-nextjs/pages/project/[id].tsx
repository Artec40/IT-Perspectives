import React from 'react'
import Head from 'next/head'
import {useRouter} from 'next/router'
import {getProjectServerSideProps} from '../../api/staticProps'
import Project from '../../components/Project/Project'
import {KillerFeatureType, ProjectType} from "../../types/types"

type PropsType = {
    initialReduxState: {
        serverSideProject: ProjectType
        serverSideKillerFeatures: Array<KillerFeatureType>
    }
}

const ProjectPage: React.FC<PropsType> = ({initialReduxState}) => {

    const router = useRouter()
    if (router.isFallback) {
        return <div>Loading...</div>
    }

    return <>
        <Head>
            <title>ИТ Перспективы</title>
        </Head>
        <Project serverSideProject={initialReduxState.serverSideProject}
                 serverSideKillerFeatures={initialReduxState.serverSideKillerFeatures}/></>
}

export async function getServerSideProps(context) {
    return getProjectServerSideProps(context)
}

export default ProjectPage