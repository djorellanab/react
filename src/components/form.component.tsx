import React, {useState, useEffect, useRef, MouseEvent, useReducer, useContext} from 'react';
import {PersonModel, ModalModel} from '../models';
import {ModalState} from '../states';
import {Modal} from './';
import {modalReducer} from '../reducers';

const FormContext = React.createContext((id:string|undefined)=>{});
const Person = (person:PersonModel) =>{
    const removePerson = useContext(FormContext);
    return(
        <>
               <div key={person.id}>
                    <h1>{person.firstName}</h1>
                    <h2>{person.email}</h2>
                    <button onClick={()=>{removePerson(person.id)}}>remove item</button>
                </div>
        </>
    );
} 
type tmpPeople = {
    people:PersonModel[]
};
const ListPeople = (a:tmpPeople) =>{
    return(
        <>
            {a.people.map((_person)=><Person {..._person}/>)}
        </>
    );
}
const Form = () =>{
    let _p: PersonModel = PersonModel.clear();;
    const [person, setPerson] = useState(_p);
    const [state, dispatch] = useReducer(modalReducer, ModalState.defaultState());
    const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
        dispatch({type:"ADD_ITEM", person});
        setPerson(PersonModel.clear());
    };
    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        const name:string = e.target.name;
        const value:string = e.target.value;
        setPerson({...person, [name]: value});
    }

    const RemoveOnClick = (id:string|undefined) =>{
        dispatch({type:"REMOVE_ACTION", id});
    }
    return (
        <>
            {state.isModalOpen && <Modal modalContent={state.modalContent} closeModal={dispatch}/>}
            <form>
                <label htmlFor='firstName'>Name: </label>
                <input type="text" id="firstName" 
                name="firstName" value={person.firstName}
                onChange={handleOnChange} />

                <label htmlFor='Email'>Email: </label>
                <input type="email" id="email" name="email" value={person.email}
                onChange= {handleOnChange} />

                <button type="button" onClick={handleSubmit}> add person</button>
            </form>
            <FormContext.Provider value={RemoveOnClick}>
                <h1>People:</h1>
                <ListPeople people={state.people} />
            </FormContext.Provider>
        </>
    );
}
export default Form;