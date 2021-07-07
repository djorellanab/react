import React from 'react';
import {ModalAction} from '../actions'
export default class Modal2Model{
    modalContent!: string;
    closeModal!: React.Dispatch<ModalAction>
}