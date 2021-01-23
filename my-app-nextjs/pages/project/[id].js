import Head from 'next/head'
import { useRouter } from 'next/router'
import {
    getProjectStaticPaths,
    getProjectStaticProps
} from '../../api/staticProps'
import ProjectContainer from '../../components/Project/ProjectContainer'

export default function ProjectPage({initialReduxState}) {

    const router = useRouter()
    if (router.isFallback) {
        return <div>Loading...</div>
    }

    return <>
        <Head>
            <title>ИТ Перспективы</title>
        </Head>
        <ProjectContainer projectId={router.query.id}
                          serverSideProject={initialReduxState.serverSideProject}
                          serverSideKillerFeatures={initialReduxState.serverSideKillerFeatures}/>
    </>
}

export function getStaticPaths() {
    return getProjectStaticPaths()
}

export function getStaticProps({params}) {
    return getProjectStaticProps(params.id)
}
