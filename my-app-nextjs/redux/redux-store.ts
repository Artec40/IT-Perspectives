import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunkMiddleware from 'redux-thunk'
import loginReducer from './login-reducer'
import headerReducer from './header-reducer'
import footerReducer from './footer-reducer'
import aboutUsReducer from './aboutUs-reducer'

let rootReducer = combineReducers({
    loginPage: loginReducer,
    header: headerReducer,
    footer: footerReducer,
    aboutUs: aboutUsReducer
})

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>
export type InferActionsTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never

let store = createStore(rootReducer, applyMiddleware(thunkMiddleware))
export default store
