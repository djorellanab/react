import React from 'react';
import { Link, useParams} from 'react-router-dom';
import {GitService} from '../services';

interface PersonParams{
    id: string
}
const Person = () => {
    const params = useParams<PersonParams>();
    const {user, isLoading, error} = GitService.useFetchPerson(params.id);

    if(error.isError){
        return (<>
            <h1>Opps, Error: {error.error?.message}</h1>
            <Link to="/api">back to people</Link>
        </>);
    }
    else if(isLoading){
        return (<>
            <h1>Loading...</h1>
        </>);
    } else {
        return (
            <>
                <img src={user.avatar_url}/>
                <h1>user: {user.login}</h1>
                <h1>type: {user.type}</h1>
                <Link to="/api">back to people</Link>
            </>
        );
    }
}

export default Person;