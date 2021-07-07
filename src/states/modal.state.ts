import {PersonModel} from '../models';
export default class ModalState{
    people!:PersonModel[];
    isModalOpen!:boolean;
    modalContent!: string;

    static defaultState():ModalState{
        return {
            people:[],
            isModalOpen:true,
            modalContent: "hello world"
        };
    }
}
    