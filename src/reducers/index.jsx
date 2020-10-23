import { combineReducers } from 'redux'  
import { userReducer } from './user'
import { categoriesReducer } from './categories'
export default combineReducers({ userReducer,categoriesReducer })