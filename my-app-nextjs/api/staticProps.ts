import {GetStaticPaths, GetStaticProps} from 'next'
import {aboutUsAPI} from './api'

export const getAboutUsStaticProps: GetStaticProps = async (context) => {
    return {
        props: {
            initialReduxState: {
                serverSideProjects: await aboutUsAPI.getProjects(),
                serverSideEmployees: await aboutUsAPI.getEmployees(),
                serverSideArticles: await aboutUsAPI.getArticles()
            }
        }
    }
}

export const getProjectStaticPaths: GetStaticPaths = async (context) => {
    const projects = await aboutUsAPI.getProjects()
    const paths = (projects).map((project) => ({
        params: {id: String(project.projectId)}
    }))
    return {paths, fallback: true}
}

export const getProjectStaticProps: GetStaticProps = async (id) => {
    return {
        props: {
            initialReduxState: {
                serverSideProject: await aboutUsAPI.getProject(Number(id)),
                serverSideKillerFeatures: await aboutUsAPI.getKillerFeatures(Number(id))
            }
        },
        revalidate: 1
    }
}

//todo закончить типизировать ssg.
export async function getEmployeeStaticPaths() {
    const employees = await aboutUsAPI.getEmployees()
    const paths = (employees).map((employee) => ({
        params: {id: String(employee.teammateId)}
    }))
    return {paths, fallback: true}
}


export async function getEmployeeStaticProps(id) {
    return {
        props: {
            initialReduxState: {
                serverSideEmployee: await aboutUsAPI.getEmployee(id),
                serverSideEmployeeProjects: await aboutUsAPI.getEmployeeProjects(id),
                serverSideEmployeeArticles: await aboutUsAPI.getEmployeeArticles(id)
            }
        },
        revalidate: 1
    }
}