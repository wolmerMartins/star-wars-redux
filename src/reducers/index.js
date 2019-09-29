import { combineReducers } from 'redux';

import getDataByPageReducer from './getDataByPageReducer';
import getDataByIdReducer from './getDataByIdReducer';
import handleErrorReducer from './handleErrorReducer';

const rootReducer = combineReducers({
    getDataByPageReducer,
    getDataByIdReducer,
    handleErrorReducer
});

export default rootReducer;