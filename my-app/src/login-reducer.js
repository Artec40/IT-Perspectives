const LOG_IN = 'LOG IN'
const TEXTNAME_CHANGE = 'TEXTNAME CHANGE'
const TEXTPASSWORD_CHANGE = 'TEXTPASSWORD CHANGE'

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
            state.users.forEach((user) => {
                if (state.textName === user.name && state.textPassword === user.password) {
                    user.status = true
                    alert (user.name + user.password + user.status)
                }
            })
            state.textName = ''
            state.textPassword = ''
            return state
        }
        case TEXTNAME_CHANGE: {
            state.textName = action.text
            return state
        }
        case TEXTPASSWORD_CHANGE: {
            state.textPassword = action.text
            return state
        }
        default:
            return state
    }
}

export const loginActionCreator = () => ({type: LOG_IN})
export const onTextNameChangeActionCreator = (text) => ({type: TEXTNAME_CHANGE, text: text})
export const onTextPasswordChangeActionCreator = (text) => ({type: TEXTPASSWORD_CHANGE, text: text})

export default loginReducer