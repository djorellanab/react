import {createSelector} from 'reselect';
import {HomeState} from '../states'
const homePageState = (state:{homeReducer:HomeState}) =>{
    console.log(state);
    return state.homeReducer.users; 
}

export const makeSelectUsers = createSelector(
    homePageState,
    users => users);