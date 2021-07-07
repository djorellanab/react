import {PersonModel} from './';
export default class ModalModel{
    people!: PersonModel[];
    isModalOpen!: boolean;
    modalContent!: string;

    static defaultState():ModalModel{
        return {
            people:[],
            isModalOpen:false,
            modalContent: "hello world"
        };
    }
}