import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { usersReducer, userInfoReducer } from './reducers/usersReducer';
import { companiesReducer } from './reducers/companiesReducers'
import { transportationsReducer, transportationDetailsReducer } from './reducers/transportationsReducer.js'
import { wagonsReducer } from './reducers/wagonsReducer';
import { usersListReducer } from './reducers/userListReducer'
import {userTypesReducer} from './reducers/userTypesReducer'
import {userCompanyReducer} from './reducers/usersReducer'
import Cookies from 'js-cookie';

const allReducers = combineReducers({
    companiesReducer,
    usersReducer,
    userInfoReducer,
    transportationsReducer,
    wagonsReducer,
    usersListReducer,
    transportationDetailsReducer,
    userTypesReducer,
    userCompanyReducer
});
//we want to get userInfo from localStorage if its there. if its  there we need to convert JSON string into object
const userInfoFromStorage = Cookies.get('currentUser') ? Cookies.get('currentUser') : null;
// localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null;
const userRoleFromStorage = Cookies.get('role') ? Cookies.get('role') : null;
const userCompanyFromStorage = Cookies.get('company') ? Cookies.get('company') : null;

//and we want to add our userInfoFromStorage to initial state. add userLogin and inside set userInfo to userInfoFromStorage
//so that data will always come from local storage if its there. so that will be loaded when store is loaded
const initialState = {
    usersReducer: { currentUser: userInfoFromStorage },
    userInfoReducer: { role: userRoleFromStorage },
    userCompanyReducer: {company: userCompanyFromStorage}
}

const middleware = [thunk];

const store = createStore(allReducers, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;