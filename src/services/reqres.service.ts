import Axios, {AxiosResponse} from 'axios';
import {REQRES} from '../constants';
import {UserReqresDto} from '../dtos/reqres';
import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Dispatch} from 'redux';
import {makeSelectUsers} from '../selectors';
import {HomeAction} from '../actions';

export default {
    useFetch:  ()=>{
        const users = useSelector(makeSelectUsers);
        const setUsers:Dispatch<HomeAction> = useDispatch();
        const _fetchData = async () :Promise<void> =>{
            const res:AxiosResponse<UserReqresDto> = await Axios.get(`${REQRES.API}${REQRES.CONTROLLERS.USER}`);
            setUsers({type:"SET_USERS", users: res.data.data.map((e)=>`${e.first_name} ${e.last_name}`)});
        }
        useEffect(()=>{
            _fetchData();
        },[])

        return {users};
    }
}