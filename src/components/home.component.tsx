import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import {ReqresService} from '../services';

const Home = () =>{
    const {users} = ReqresService.useFetch();
    return (
        <>
            <h1>users:</h1>
            {users.map((user)=>{
                return (<div key={uuidv4()}>{user}</div>);
            })}
        </>
    );
}
export default Home;