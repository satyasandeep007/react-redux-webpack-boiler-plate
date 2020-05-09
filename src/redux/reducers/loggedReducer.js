const loggedReducer = (state = { isLoggedIn: false }, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                isLoggedIn: true
            };
        case 'LOGOUT':
            return {
                isLoggedIn: false
            };
        default:
            return state;
    }
}

export default loggedReducer;