import { combineReducers } from 'redux';

import getDataByPageReducer from './getDataByPageReducer';
import getDataByIdReducer from './getDataByIdReducer';

const rootReducer = combineReducers({
    getDataByPageReducer,
    getDataByIdReducer,
});

export default rootReducer;