import {CounterState} from '../states';
import {CounterAction} from '../actions';
export const counterReducer = (state:CounterState, action:CounterAction) =>{
    if(action.type ==="INCREMENT"){
        return {...state,
                counter: state.count+ action.value}
    }else if (action.type === "DECREMENT"){
        return {...state,
            counter: state.count- action.value}
    }else{
        return {...state,
            counter: 0}
    }
}