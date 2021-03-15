import {InferActionsTypes} from "./redux-store";

export type ActionsTypes = InferActionsTypes<typeof loginActions>
export const loginActions = {
    changeName: (name) => ({type: 'CHANGE_NAME', name: name} as const),
    changePassword: (password) => ({type: 'CHANGE_PASSWORD', password: password} as const),
    changeCurrentUser: (name, password) => ({type: 'CHANGE_CURRENT_USER', name: name, password: password} as const),
    setAccounts: (accounts) => ({type: 'SET_ACCOUNTS', accounts: accounts} as const),
    setUserStatusFalse: () =>({type: 'SET_USER_STATUS_FALSE'} as const)
}