const LOG_IN = 'LOG_IN'
const TEXTNAME_CHANGE = 'TEXTNAME_CHANGE'
const TEXTPASSWORD_CHANGE = 'TEXTPASSWORD_CHANGE'

let initialState = {
    users: [
        {id: 1, name: 'user1', password: 'user1', status: false},
        {id: 2, name: 'user2', password: 'user2', status: false},
        {id: 3, name: 'user3', password: 'user3', status: false}
    ],
    textName: '',
    textPassword: ''
}

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOG_IN: {
//Вроде работает, в дебаггере шагает адекватно, но лишний раз надо подумать правильно ли написал
            return {
                ...state,
                users: [...state.users.map((user) => {
                    if (state.textName === user.name && state.textPassword === user.password) {
                        user.status = true
                        alert(user.name + user.password + user.status)
                    }
                })]
            }
        }
        case TEXTNAME_CHANGE: {
            return {
                ...state,
                textName: action.text
            }
        }
        case TEXTPASSWORD_CHANGE: {
            return {
                ...state,
                textPassword: action.text
            }
        }
        default:
            return state
    }
}

export const loginActionCreator = () => ({type: LOG_IN})
export const onTextNameChangeActionCreator = (text) => ({type: TEXTNAME_CHANGE, text: text})
export const onTextPasswordChangeActionCreator = (text) => ({type: TEXTPASSWORD_CHANGE, text: text})

export default loginReducer