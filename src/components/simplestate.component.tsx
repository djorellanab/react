import React, {useState, useEffect} from 'react';
import {SIMPLESTATE} from '../constants';

const SimpleState = () =>{
    const [simple, setTitle] = useState({title:SIMPLESTATE.INITIAL, message:"no quiero cambiar mensaje"})
    const [counter, setCounter] = useState(0);
    const [size, setSize] = useState(window.innerWidth);

    const handlerClick = () =>{
        if (simple.title == SIMPLESTATE.INITIAL) {
            setTitle({...simple, title: SIMPLESTATE.FINAL});   
        }else{
            setTitle({...simple, title: SIMPLESTATE.INITIAL});   
        }
    }

    const handlerIncreaseCounter = () =>{
        setTimeout(()=>{
            setCounter((prevValue)=>prevValue+1);
        },2000)
    }

    const checkSize = () =>{
        setSize(window.innerWidth);
    }
    useEffect(()=>{
        console.log("call use efect counter");
        if(counter >= 1){
            document.title = `message ${counter}`;
        }
    },[counter])

    useEffect(()=>{
        console.log("call use efect title");
    },[simple])

    useEffect(()=>{
        window.addEventListener("resize", checkSize);
        return (()=>{
            window.removeEventListener("resize", checkSize);
        });
    },[size])

    return (
    <React.Fragment>
        <h1>{simple.title}</h1>
        <p>{simple.message}</p>
        <h2>counter: {counter}</h2>
        <h2>size: {size} px</h2>
        <button type="button" onClick={handlerClick}>title change</button>  
        <button type="button" onClick={handlerIncreaseCounter}>increase counter</button>   
    </React.Fragment>)
}

export default SimpleState;