import {useMemo} from 'react'
import {applyMiddleware, combineReducers, createStore} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import loginReducer from './login-reducer'
import headerReducer from './header-reducer'
import footerReducer from './footer-reducer'
import aboutUsReducer from './aboutUs-reducer'
import thunkMiddleware from 'redux-thunk'

let store

let rootReducer = combineReducers({
    loginPage: loginReducer,
    header: headerReducer,
    footer: footerReducer,
    aboutUs: aboutUsReducer
})

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>

type PropertiesTypes<T> = T extends { [key: string]: infer U } ? U : never
export type InferActionsTypes<T extends { [key: string]: (...args: any[]) => any }> = ReturnType<PropertiesTypes<T>>

function initStore() {
    return createStore(
        rootReducer,
        composeWithDevTools(applyMiddleware(thunkMiddleware))
    )
}

//todo откорректировать замену стейта в соотв. с докой.
export const initializeStore = (preloadedState) => {

    // @ts-ignore
    let _store = store || initStore(preloadedState)

    // After navigating to a page with an initial Redux state, merge that state
    // with the current state in the store, and create a new store
    if (preloadedState && store) {

        // @ts-ignore
        _store = initStore({
            ...store.getState(),
            ...preloadedState,
        })
        // Reset the current store
        store = undefined
    }

    // For SSG and SSR always create a new store
    if (typeof window === 'undefined') return _store
    // Create the store once in the client
    if (!store) store = _store

    return _store
}

export function useStore(initialState) {
    const store = useMemo(() => initializeStore(initialState), [initialState])
    return store
}
