import {InferActionsTypes} from "./redux-store";
import {
    ArticleType, CurrentEmployeeType,
    KillerFeatureType, EmployeeType, ProjectType
} from "../types/types";

export type ActionsTypes = InferActionsTypes<typeof aboutUsActions>
export const aboutUsActions = {
    setAboutUsPage: (projects: Array<ProjectType>,
                     employees: Array<EmployeeType>,
                     articles: Array<ArticleType>) => ({
        type: 'SET_ABOUT_US_PAGE', aboutUsPage: {projects, employees, articles}
    } as const),

    setEmployee: (employee: CurrentEmployeeType) => ({
        type: 'SET_EMPLOYEE', employee: employee
    } as const),

    setProjectPage: (project: ProjectType,
                     killerFeatures: Array<KillerFeatureType>) => ({
        type: 'SET_PROJECT_PAGE', projectPage: {project, killerFeatures}
    } as const),

    setEmployeePage: (employee: CurrentEmployeeType,
                      projects: Array<ProjectType>,
                      articles: Array<ArticleType>) => ({
        type: 'SET_EMPLOYEE_PAGE', employeePage: {employee, projects, articles}
    } as const),
}