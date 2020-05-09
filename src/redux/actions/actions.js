import { INCREMENT, DECREMENT, LOGIN, LOGOUT } from '../constants/actionTypes';

// eslint-disable-next-line no-unused-vars
export const increment = (task) => ({
    type: INCREMENT,
})
// eslint-disable-next-line no-unused-vars
export const decrement = (task) => ({
    type: DECREMENT,
})

// eslint-disable-next-line no-unused-vars
export const login = (task) => ({
    type: LOGIN,
})

// eslint-disable-next-line no-unused-vars
export const logout = (task) => ({
    type: LOGOUT,
})
