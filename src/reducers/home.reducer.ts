import {HomeState} from '../states';
import {HomeAction} from '../actions';
export const homeReducer = (state:HomeState, action:HomeAction) =>{
    switch (action.type) {
        case "SET_USERS":
            return {...state, users:action.users}            
        default:
            return HomeState.defaultState();
    }
}