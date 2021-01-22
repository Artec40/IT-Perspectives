import { useEffect, useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useSelector, useDispatch } from 'react-redux'
import {
    getCurrentKillerFeatures,
    getCurrentProject,
    getIsFetching
} from '../../redux/aboutUs-selector'
import {
    getProjectStaticPaths,
    getProjectStaticProps
} from '../../api/staticProps'
import { getProjectPage } from '../../redux/aboutUs-reducer'
import Project from '../../components/Project/Project'

export default function ProjectPage({serverData}) {

    const router = useRouter()
    if (router.isFallback) {
        return <div>Loading...</div>
    }

    const project = useSelector(state => getCurrentProject(state))
    const killerFeatures = useSelector(state => getCurrentKillerFeatures(state))
    const isFetching = useSelector(state => getIsFetching(state))

    const dispatch = useDispatch()
    const [data, setData] = useState(serverData)

    useEffect(() => {
        async function load() {
            dispatch(getProjectPage(router.query.id))
            const data = {
                project: project,
                killerFeatures: killerFeatures
            }
            setData(data)
        }

        if (!serverData) {
            load()
        }
    }, [dispatch])

    if (!data) {
        return (
            <p>Loading...</p>
        )
    }
    if (isFetching) {
        return (
            <p>Loading...</p>
        )
    }
    return (
        <>
            <Head>
                <title>ИТ Перспективы - {project.name}</title>
            </Head>
            <Project project={project}
                     killerFeatures={killerFeatures}/>
        </>
    )
}

export function getStaticPaths() {
    return getProjectStaticPaths()
}

export function getStaticProps({params}) {
    return getProjectStaticProps(params.id)
}
