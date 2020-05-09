import { combineReducers } from 'redux';
import taskReducer from './taskReducer';
import loggedReducer from './loggedReducer';

const rootReducer = combineReducers({
    tasks: taskReducer,
    logger: loggedReducer
})

export default rootReducer;
