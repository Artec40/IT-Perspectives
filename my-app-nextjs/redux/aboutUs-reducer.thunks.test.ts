import {saveEmployeeData} from "./aboutUs-reducer";
import {aboutUsAPI, employeeAPI, employeeDataType} from "../api/api";
import {CurrentEmployeeType} from "../types/types";
import {aboutUsActions} from "./aboutUs-actions";

jest.mock('../api/api')
const dispatchMock = jest.fn()
const getStateMock = jest.fn()

beforeEach(() => {
    dispatchMock.mockClear()
    getStateMock.mockClear()
    employeeApiMock.changeEmployeeData.mockClear()
    aboutUsApiMock.getEmployee.mockClear()
})

const aboutUsApiMock = aboutUsAPI as jest.Mocked<typeof aboutUsAPI>
const employeeApiMock = employeeAPI as jest.Mocked<typeof employeeAPI>

let employeeData: employeeDataType = {
    ShortName: 'Лео',
    ArticlesCount: 2,
    Company: 'Канализейшен',
    FullName: 'Леонардо Да Винчи',
    Location: 'AMERICA!!!',
    PersonalInfo: 'I AM NINJA, FOR FREEDOM, FOR AMERICA!',
    Phone: '8 800 555 35 35',
    Website: 'LeonardoDiCaprio.com'
}
employeeApiMock.changeEmployeeData.mockReturnValue(Promise.resolve(employeeData))

const getEmployeeResult: CurrentEmployeeType = {
    teammateShortName: 'Леонардо',
    teammateId: 2,
    teammateArticlesCount: 1,
    teammateCompany: 'Канализация',
    teammateFullName: 'Леонардо Да Винчи',
    teammateLocation: 'AMERICA',
    teammatePersonalInfo: 'I AM NINJA, FOR FREEDOM, FOR AMERICA!',
    teammatePhone: '8 800 555 35 35',
    teammatePhoto: '/teammates/teammate_gudok.jpg',
    teammateWebsite: 'LeonardoDiCaprio.com'
}
aboutUsApiMock.getEmployee.mockReturnValue(Promise.resolve(getEmployeeResult))

test("save employee data in employee page", async () => {
    const thunk = saveEmployeeData(2, employeeData)
    await thunk(dispatchMock, getStateMock, {})
    expect(dispatchMock).toBeCalledTimes(1)
    expect(dispatchMock).toHaveBeenNthCalledWith(1, aboutUsActions.setEmployee(getEmployeeResult))
})