import {GIT} from '../constants';
import {UserGitDto}from '../dtos/git';
import {useState, useEffect} from 'react';
import {ErrorModel} from '../models';

export default {
    useFetch: () =>{
        const _u : UserGitDto[]= [];
        const _e : ErrorModel = {error: null, isError:false};
        const [users, setUsers ] = useState(_u);
        const [isLoading, setIsLoading] = useState(true);
        const [error, setError] = useState(_e);
        
        const _fetchUser = async () =>{
            const res = await fetch(`${GIT.API}${GIT.CONTROLLERS.USER}`);
            if(res.ok){
                let data = await res.json();
                setUsers(data);
            }else{
                let err = new Error(`${res.status} - ${res.statusText} - ${JSON.stringify(res.body)}`);
                setError({error: err, isError:true});
            }
            setIsLoading(false);
        }

        useEffect(()=>{
            _fetchUser();
        },[])
        
        return {users, isLoading, error};

    },
    useFetchPerson: (id:string) =>{
        const _u : UserGitDto= UserGitDto.dummy();
        const _e : ErrorModel = {error: null, isError:false};
        const [user, setUser ] = useState(_u);
        const [isLoading, setIsLoading] = useState(true);
        const [error, setError] = useState(_e);
        
        const _fetchUser = async () =>{
            const res = await fetch(`${GIT.API}${GIT.CONTROLLERS.USER}`);
            if(res.ok){
                let data = await res.json();
                data = data.filter((_users:UserGitDto) => _users.id === +id)[0];
                if(!data){
                    let err = new Error(`400 - user not found`);
                    setError({error: err, isError:true});
                }
                setUser(data);
            }else{
                let err = new Error(`${res.status} - ${res.statusText} - ${JSON.stringify(res.body)}`);
                setError({error: err, isError:true});
            }
            setIsLoading(false);
        }

        useEffect(()=>{
            _fetchUser();
        },[id])
        
        return {user, isLoading, error};

    }
}
