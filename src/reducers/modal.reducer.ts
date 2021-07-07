import {ModalState} from '../states';
import {ModalAction} from '../actions';
export const modalReducer = (state:ModalState, action:ModalAction) =>{
    if(action.type === "ADD_ITEM"){
        return {
            ...state,
            isModalOpen:true,
            modalContent:"Item was added",
            people: [...state.people, action.person]
            }
    } else if (action.type === "REMOVE_ACTION"){
        return {
            ...state,
            isModalOpen:true,
            modalContent:"item was removed",
            people: state.people.filter((person)=> person.id !== action.id)
        }
    } else if (action.type === "CLOSE_MODAL"){
        return {
            ...state,
            isModalOpen:false
        }
    }
    else {
        return ModalState.defaultState();
    }
}