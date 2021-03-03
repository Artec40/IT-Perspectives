import {ActionsTypes} from "./login-actions"

let initialState = {
    users: [
        {id: 1, name: 'user1', password: 'user1', status: false},
        {id: 2, name: 'user2', password: 'user2', status: false},
        {id: 3, name: 'user3', password: 'user3', status: false}
    ],
    textName: '',
    textPassword: ''
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
        case 'CHANGE_USER_STATUS': {
            return {
                ...state,
                users: [...state.users.map(user => {
                    if ((user.name === action.name) && (user.password === action.password))
                        user.status = true
                    return user
                })]
            }
        }
        default:
            return state
    }
}

export default loginReducer