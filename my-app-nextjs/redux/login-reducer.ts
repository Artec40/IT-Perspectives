import {AccountType} from "../types/types"
import {ActionsTypes, loginActions} from "./login-actions"
import {loginAPI} from "../api/api";
import {AppStateType} from "./redux-store";
import {ThunkAction} from "redux-thunk";

let initialState = {
    users: [] as Array<AccountType>,
    textName: '',
    textPassword: '',
    currentUser: {
        userId: null as number,
        userName: '',
        isAuth: false
    }
}

type InitialStateType = typeof initialState

const loginReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'CHANGE_NAME': {
            return {
                ...state, textName: action.name
            }
        }
        case 'CHANGE_PASSWORD': {
            return {
                ...state, textPassword: action.password
            }
        }
        case 'CHANGE_CURRENT_USER': {
            return {
                ...state,
                users: [...state.users.map(user => {
                    if ((user.accountName === action.name) && (user.accountPassword === action.password)) {
                        state.currentUser.userId = user.accountId
                        state.currentUser.userName = user.accountName
                        state.currentUser.isAuth = true
                    }
                    return user
                })]
            }
        }
        case 'SET_ACCOUNTS': {
            return {
                ...state, users: action.accounts
            }
        }
        case 'SET_USER_STATUS_FALSE': {
            return {
                ...state,
                textName: '',
                textPassword: '',
                currentUser: {userId: null, userName: '', isAuth: false}
            }
        }
        default:
            return state
    }
}

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>
export const getAccounts = (): ThunkType => async (dispatch) => {
    const accounts = await loginAPI.getAccounts()
    dispatch(loginActions.setAccounts(accounts))
}

export default loginReducer