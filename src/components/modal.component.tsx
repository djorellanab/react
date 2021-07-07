import React, {useEffect} from 'react';
import {Modal2Model} from '../models';
const Modal = (modal:Modal2Model) =>{

    useEffect(()=>{
        setTimeout(() => {
            modal.closeModal({type:"CLOSE_MODAL"})
        }, 3000);
    });

    return(
        <div>
            <h3>{modal.modalContent}</h3>
        </div>
    );
}

export default Modal;