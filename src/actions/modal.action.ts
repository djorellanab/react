import {PersonModel} from '../models'
export type ModalAction = 
    | {type:"DEFAULT"}
    | {type:"ADD_ITEM", person:PersonModel}
    | {type:"REMOVE_ACTION", id:string|undefined}
    | {type:"CLOSE_MODAL"};