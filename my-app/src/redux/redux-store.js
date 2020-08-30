import { applyMiddleware, combineReducers, createStore } from 'redux'
import loginReducer from './login-reducer'
import headerReducer from './header-reducer'
import footerReducer from './footer-reducer'
import aboutUsReducer from './aboutUs-reducer'
import thunkMiddleware from 'redux-thunk'

let reducers = combineReducers({
    loginPage: loginReducer,
    header: headerReducer,
    footer: footerReducer,
    aboutUs: aboutUsReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store
export default store