import {InferActionsTypes} from "./redux-store";

export type ActionsTypes = InferActionsTypes<typeof actions>
export const actions = {
    changeName: (name) => ({type: 'CHANGE_NAME', name: name} as const),
    changePassword: (password) => ({type: 'CHANGE_PASSWORD', password: password} as const),
    changeUserStatus: (name, password) => ({type: 'CHANGE_USER_STATUS', name: name, password: password} as const)
}