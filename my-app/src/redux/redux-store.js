import { combineReducers, createStore } from 'redux'
import loginReducer from '../login-reducer'
import headerReducer from '../header-reducer'
import footerReducer from '../footer-reducer'
import aboutUsReducer from '../aboutUsReducer'

let reducers = combineReducers({
    loginPage: loginReducer,
    header: headerReducer,
    footer: footerReducer,
    aboutUs: aboutUsReducer
})

let store = createStore(reducers)

export default store