import React from 'react';
import {GitService} from '../services';
import {Link} from 'react-router-dom';

const Api = () =>{
    const {users, isLoading, error} = GitService.useFetch();

    if(error.isError){
        return (<>
            <h1>Opps, Error: {error.error?.message}</h1>
        </>);
    }
    else if(isLoading){
        return (<>
            <h1>Loading...</h1>
        </>);
    } else {
        return (
            <>
                <h1>users</h1>
                {users.map((user)=>{
                    return (
                        <React.Fragment key={user.id}>
                            <img src={user.avatar_url}></img>
                            <h1>{user.login}</h1>
                            <Link to={`/person/${user.id}`}>details</Link>
                        </React.Fragment>
                    );
                })}
            </>
        );
    }
}


export default Api;