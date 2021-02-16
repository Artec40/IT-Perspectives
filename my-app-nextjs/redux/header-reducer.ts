let initialState = {
    companyLogo: {logo: '/favicon.ico'}
}

export type initialStateType = typeof initialState;

const headerReducer = (state: initialStateType = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default headerReducer