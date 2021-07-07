import React, {useState} from 'react';

const Counter = () =>{
    const [count, setcount] = useState(0)

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        const value:string = e.target.value;
        setcount(+value);
    }

    const handleIncrement = () =>{

    }


    const handleDecrement= () =>{

    }

    const handleReset= () =>{

    }

    return (
        <>
            <h1>Counter</h1>
            <label htmlFor='value'>value: </label>
            <input type="text" id="value" 
                name="value" value={0}
                onChange={handleOnChange} />
            <button type="button" onClick={handleIncrement}>Increment</button>
            <button type="button" onClick={handleDecrement}>Decrement</button>
            <button type="button" onClick={handleReset}>Reset</button>
        </>
    )
}


export default Counter;